import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { OrderRoundPageComponent } from './pages/order-round-page/order-round-page.component';
import { SettleTabPageComponent } from './pages/settle-tab-page/settle-tab-page.component';
import { MainMenuPageComponent } from './pages/main-menu-page/main-menu-page.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    MainMenuPageComponent,
    OrderRoundPageComponent,
    SettleTabPageComponent,

    // Shared component
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
