import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OrderRoundPageComponent } from './pages/order-round-page/order-round-page.component';
import { SettleTabPageComponent } from './pages/settle-tab-page/settle-tab-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, title: 'Bar Tab Billy' },
  { path: 'home', component: HomePageComponent, title: 'BTB | Home' },
  { path: 'order', component: OrderRoundPageComponent, title: 'BTB | Order' },
  { path: 'settle', component: SettleTabPageComponent, title: 'BTB | Settle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
