import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
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
