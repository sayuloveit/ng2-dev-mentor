import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTagComponent } from './components/product-tag/product-tag.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductTagComponent,
    ProductSearchComponent,
    ProductSortComponent,
    ProductContainerComponent
  ],
  exports: [
    ProductContainerComponent,
  ]
})
export class ProductModule { }
