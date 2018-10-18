import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'productlist', component:ProductListComponent},
  {path:'productlist/:id', component:ProductDetailComponent},
  {path:'productcreation', component:ProductCreationComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomeComponent,ProductCreationComponent, ProductListComponent, 
  ProductDetailComponent,PageNotFoundComponent];
