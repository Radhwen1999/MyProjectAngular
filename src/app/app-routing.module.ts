import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {Product} from "./core/model/product";
import {OffresEmploiComponentComponent} from "./offres-emploi-component/offres-emploi-component.component";
import {ProductComponent} from "./product/product.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [

  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path: 'products/:id',
    component: ProductDetailsComponent,},
  {path:'offres',component:OffresEmploiComponentComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
