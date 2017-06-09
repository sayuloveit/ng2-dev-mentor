import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTagComponent } from './components/product-tag/product-tag.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductContainerComponent } from './components/product-container/product-container.component';

// pipes
import { SortProductsPipe } from './pipes/sort-products/sort-products.pipe';
import { FilterProductsPipe } from './pipes/filter-products/filter-products.pipe';

// service
import { ProductService } from './services/product/product.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductTagComponent,
    ProductSearchComponent,
    ProductSortComponent,
    ProductContainerComponent,
    SortProductsPipe,
    FilterProductsPipe
  ],
  exports: [
    ProductContainerComponent,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
