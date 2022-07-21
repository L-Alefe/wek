import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products-form', component: ProductsFormComponent },
    { path: 'products-form/:id', component: ProductsFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}