import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrderViewState, ProductMenu } from './order-round.const';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import { OrderSummaryView } from 'src/app/shared/views/order-summary/order-summary.component';
import { DataService } from 'src/app/shared/services/data/data.service';
import { SelectTabUse } from 'src/app/shared/views/select-tab/select-tab.const';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-order-round',
  templateUrl: './order-round.component.html',
  styleUrls: ['./order-round.component.scss'],
})
export class OrderRoundPage {
  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: OrderSummaryView;

  selectTabUse = SelectTabUse;
  selectedTabID: string | undefined;
  viewState = OrderViewState;
  currentViewState = OrderViewState.SelectTab;
  productMenu = ProductMenu;
  orderItems: OrderItem[] = [];
  isOrderConfirmation = false;

  constructor(
    private dataService: DataService,
    private viewportScroller: ViewportScroller
  ) {}

  onTabSelected(tabID: string) {
    this.selectedTabID = tabID;
    this.changeView(OrderViewState.ProductMenu)
  }

  onOrderPlaced(orderItems: OrderItem[]) {
    this.orderItems = orderItems;
    this.changeView(OrderViewState.OrderConfirmation)

  }

  onConfirmationCancelled() {
    this.changeView(OrderViewState.ProductMenu)
  }

  onConfirmation() {
    if (!this.selectedTabID || !this.orderItems) return;
    this.dataService.placeOrder(this.selectedTabID, this.orderItems);
    this.changeView(OrderViewState.OrderConfirmed)
  }

  private changeView(view: OrderViewState) {
    this.currentViewState = view;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
