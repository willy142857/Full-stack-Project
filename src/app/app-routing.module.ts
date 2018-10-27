import { CommodityComponent } from './commodity/commodity.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './member/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './member/register/register.component';
import { ProfileComponent } from './member/profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RetrievepasswordComponent } from './retrievepassword/retrievepassword.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
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
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'commodity',
    component: CommodityComponent
  },
  {
    path: 'commodity/:id',
    component: CommodityComponent
  },
  {
    path: 'resetPassword',
    component: ResetpasswordComponent
  },
  {
    path: 'retrievePassword',
    component: RetrievepasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
