import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTagComponent } from './components/product-tag/product-tag.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductTagComponent
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductModule { }
