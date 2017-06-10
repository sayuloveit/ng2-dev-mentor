import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get('https://shining-torch-4509.firebaseio.com/products.json')
              .retryWhen(error => error.delay(1000).take(5))
              .map(response => (<any>Object).values(response.json()))
              .map((products: IProduct[]) => {
                  return products.map((product, index) => {
                    product.id = index + 1;
                    return product;
                  });
              });
  }

}
