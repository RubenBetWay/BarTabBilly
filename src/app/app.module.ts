import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { OrderRoundPageComponent } from './pages/order-round-page/order-round-page.component';
import { SettleTabPageComponent } from './pages/settle-tab-page/settle-tab-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    ButtonComponent,
    OrderRoundPageComponent,
    SettleTabPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
