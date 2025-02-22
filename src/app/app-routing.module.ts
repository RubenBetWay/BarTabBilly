import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderRoundPage } from './pages/order-round/order-round.component';
import { SettleTabPage } from './pages/settle-tab/settle-tab.component';
import { MainMenuPage } from './pages/main-menu/main-menu.component';
import { OpenTabPage } from './pages/open-tab/open-tab.component';

const routes: Routes = [
  { path: '', component: MainMenuPage, title: 'Bar Tab Billy' },
  { path: 'open', component: OpenTabPage, title: 'BTB | Order' },
  { path: 'order', component: OrderRoundPage, title: 'BTB | Order' },
  { path: 'settle', component: SettleTabPage, title: 'BTB | Settle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
