import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrderViewState, ProductMenu } from './order-round.const';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import { OrderSummaryView } from 'src/app/shared/views/order-summary/order-summary.component';

@Component({
  selector: 'app-order-round',
  templateUrl: './order-round.component.html',
  styleUrls: ['./order-round.component.scss'],
})
export class OrderRoundPage {
  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: OrderSummaryView;

  selectedTabID: string | undefined
  viewState = OrderViewState;
  currentViewState = OrderViewState.SelectTab
  productMenu = ProductMenu;
  orderItems: OrderItem[] = [];
  isOrderConfirmation = false;

  onTabSelected(tabID: string){
    this.selectedTabID = tabID
    this.currentViewState = OrderViewState.ProductMenu
  }

  onOrderPlaced(orderItems: OrderItem[]) {
    this.orderItems = orderItems
    this.currentViewState = OrderViewState.OrderConfirmation
  }

  onConfirmationCancelled(){
    this.currentViewState = OrderViewState.ProductMenu
  }
}
