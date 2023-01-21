import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { OrderTrackPageComponent } from './components/pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageAdminComponent } from './components/pages/login-page-admin/login-page-admin.component';
import { SellerComponent } from './components/pages/seller/seller.component';
import { AddItemPageComponent } from './components/pages/add-item-page/add-item-page.component';
import { EditeItemPageComponent } from './components/pages/edite-item-page/edite-item-page.component';
import { OrderListPageComponent } from './components/pages/order-list-page/order-list-page.component';
import { QueactionsListPageComponent } from './components/pages/queactions-list-page/queactions-list-page.component';
import { AllsellerslistPageComponent } from './components/pages/allsellerslist-page/allsellerslist-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'item/:id', component:EditeItemPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'login-admin', component: LoginPageAdminComponent},
  {path:'seller', component: SellerComponent},
  {path:'sellers', component: AllsellerslistPageComponent},
  {path:'quections', component: QueactionsListPageComponent},
  {path:'additem', component: AddItemPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},
  {path:'orderlist', component: OrderListPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
