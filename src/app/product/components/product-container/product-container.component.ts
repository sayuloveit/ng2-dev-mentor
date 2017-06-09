import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';

import { ProductService } from '../../services/product/product.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit, OnDestroy {

  public products: IProduct[];
  public sort: ISort = {
    property: 'price',
    reverse: false
  };
  public predicate = '';

  private _productSub: Subscription

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.onFilter();

    this._productSub = this._productService.getProducts()
                      .subscribe((products: IProduct[]) => {
                          this.products = products;
                      });
  }

  ngOnDestroy(): void {
    this._productSub.unsubscribe();
  }

  onFilter(predicate: string = ''): void {
    this.predicate = predicate;
  }

  onSort(sortBy: string) {
    this.sort = {
      reverse: !this.sort.reverse,
      property: sortBy
    }
  }
}
