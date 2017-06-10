import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductListContainerComponent } from './components/product-list-container/product-list-container.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

const productRoutes: Routes = [
    {
        path: 'product', component: ProductContainerComponent, children: [
            {
                path: '', component: ProductListContainerComponent, outlet: 'product'
            },
            {
                path: ':id', component: OrderFormComponent, outlet: 'product'
            }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRouteModule { }

//  {
//         path: 'import', component: ImportComponent, children: [
//             {
//                 path: '',
//                 component: DummyComponent,
//                 outlet: 'import-steps'
//             },
//             {
//                 path: 'company-matching/:domainTx/:stepId/:sourceTypeId/:sourceSubtypeId',
//                 component: CompanyMatchingComponent,
//                 outlet: 'import-steps'
//             },
//             {
//                 path: 'column-mapping/:domainTx/:stepId/:sourceTypeId/:sourceSubtypeId',
//                 component: ColumnMappingComponent,
//                 outlet: 'import-steps'
//             }
//         ]
//     }
