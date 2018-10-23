import { CommodityComponent } from './commodity/commodity.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './member/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './cart/cart.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { IndexComponent } from './products/index/index.component';
import { RegisterComponent } from './member/register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'commodity',
        component: CommodityComponent
      },
      {
        path: 'resetPassword',
        component: ResetpasswordComponent
      }
      ,
      {
        path: 'retrievePassword',
        component: RetrievepasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
