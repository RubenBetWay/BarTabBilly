import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { OrderRoundPage } from './pages/order-round/order-round.component';
import { SettleTabPage } from './pages/settle-tab/settle-tab.component';
import { MainMenuPage } from './pages/main-menu/main-menu.component';
import { StockItemCardComponent } from './shared/components/stock-item-card/stock-item-card.component';
import { ExpandableTextContainerComponent } from './shared/components/expandable-text-container/expandable-text-container.component';
import { QuantityToggleComponent } from './shared/components/quantity-toggle/quantity-toggle.component';
import { BottomSheetComponent } from './shared/components/bottom-sheet/bottom-sheet.component';
import { OrderSummaryView } from './shared/views/order-summary/order-summary.component';
import { OrderSummaryTableComponent } from './shared/components/order-summary-table/order-summary-table.component';
import { OpenTabPage } from './pages/open-tab/open-tab.component';
import { InitialComponent } from './pages/open-tab/views/inital/initial.component';
import { AddTabPartiesComponent } from './pages/open-tab/views/add-tab-parties/add-tab-parties.component';
import { AddFriendComponent } from './pages/open-tab/views/add-friend/add-friend.component';
import { OpenTabConfirmationComponent } from './pages/open-tab/views/open-tab-confirmation/open-tab-confirmation.component';
import { OpenTabConfirmedComponent } from './pages/open-tab/views/open-tab-confirmed/open-tab-confirmed.component';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    MainMenuPage,
    OpenTabPage,
    OrderRoundPage,
    SettleTabPage,

    // Views
    OrderSummaryView,

    // Shared component
    ButtonComponent,
    StockItemCardComponent,
    ExpandableTextContainerComponent,
    QuantityToggleComponent,
    BottomSheetComponent,
    OrderSummaryTableComponent,
    InitialComponent,
    AddTabPartiesComponent,
    AddFriendComponent,
    OpenTabConfirmationComponent,
    OpenTabConfirmedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
