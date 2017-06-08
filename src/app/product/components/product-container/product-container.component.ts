import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.scss']
})
export class ProductContainerComponent implements OnInit {

  public products: IProduct[];
  public sort: ISort = {
    property: 'price',
    reverse: false
  };
  public predicate = '';

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.onFilter();

    this.products = this._productService.getProducts();
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
