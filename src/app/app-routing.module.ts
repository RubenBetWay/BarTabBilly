import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { OrderRoundPageComponent } from './pages/order-round-page/order-round-page.component';
import { SettleTabPageComponent } from './pages/settle-tab-page/settle-tab-page.component';
import { MainMenuPageComponent } from './pages/main-menu-page/main-menu-page.component';

const routes: Routes = [
  { path: '', component: MainMenuPageComponent, title: 'Bar Tab Billy' },
  { path: 'order', component: OrderRoundPageComponent, title: 'BTB | Order' },
  { path: 'settle', component: SettleTabPageComponent, title: 'BTB | Settle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
