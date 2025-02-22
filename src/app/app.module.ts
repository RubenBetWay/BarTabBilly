import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { OrderRoundPageComponent } from './pages/order-round-page/order-round-page.component';
import { SettleTabPageComponent } from './pages/settle-tab-page/settle-tab-page.component';
import { MainMenuPageComponent } from './pages/main-menu-page/main-menu-page.component';
import { StockItemCardComponent } from './shared/components/stock-item-card/stock-item-card.component';
import { ExpandableTextContainerComponent } from './shared/components/expandable-text-container/expandable-text-container.component';
import { QuantityToggleComponent } from './shared/components/quantity-toggle/quantity-toggle.component';
import { BottomSheetComponent } from './shared/components/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    MainMenuPageComponent,
    OrderRoundPageComponent,
    SettleTabPageComponent,

    // Shared component
    ButtonComponent,
    StockItemCardComponent,
    ExpandableTextContainerComponent,
    QuantityToggleComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
