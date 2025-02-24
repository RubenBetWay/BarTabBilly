import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { OrderInstruction } from 'src/app/shared/components/stock-item-card/stock-item-card.model';
import {
  ConfirmationButton,
  ConfirmationButtons,
  ConfirmedButton,
  StockItemCardConfigs,
} from './order-round.const';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import { OrderSummaryView } from 'src/app/shared/views/order-summary/order-summary.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-round',
  templateUrl: './order-round.component.html',
  styleUrls: ['./order-round.component.scss'],
})
export class OrderRoundPage {
  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: OrderSummaryView;

  stockItemCardConfigs = StockItemCardConfigs;
  orderItems: OrderItem[] = [];
  isOrderConfirmation = false;

  onOrderPlaced(orderItems: OrderItem[]) {
    this.orderItems = orderItems
    this.isOrderConfirmation = true;
  }

  onConfirmationCancelled(){
    this.isOrderConfirmation = false;
  }
}
