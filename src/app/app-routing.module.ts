import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
//import { LoginComponent } from './components/login/login.component'
//import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import {Product} from "./models/product";


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
//  { path: 'login', component: LoginComponent },
//  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
