import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=> import('./products/products-routing.module').then(m=>m.ProductsRoutingModule)
    }
];
