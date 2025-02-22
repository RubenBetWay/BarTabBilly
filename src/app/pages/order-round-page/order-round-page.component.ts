import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { OrderInstruction } from 'src/app/shared/components/stock-item-card/stock-item-card.model';
import {
  ConfirmationButton,
  ConfirmationButtons,
  ConfirmedButton,
  StockItemCardConfigs,
} from './order-round-page.const';
import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import { OrderSummaryComponent } from 'src/app/shared/views/order-summary/order-summary.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-round-page',
  templateUrl: './order-round-page.component.html',
  styleUrls: ['./order-round-page.component.scss'],
})
export class OrderRoundPageComponent implements AfterViewInit {
  @ViewChild('bottomSheet') bottomSheet!: BottomSheetComponent;
  @ViewChild('bottomSheet', { read: ElementRef }) bottomSheetRef!: ElementRef;
  @ViewChild('orderSummary') orderSummary!: OrderSummaryComponent;

  stockItemCardConfigs = StockItemCardConfigs;
  showBottomSheet = false;
  bottomSheetHeight = 0;
  extraSpaceStyling = {};
  orderItems: OrderItem[] = [];
  isOrderConfirmation = false;
  orderConfirmed = false;
  confirmationButtons = ConfirmationButtons;
  confirmedButton = ConfirmedButton

  constructor(private router: Router) {}

  ngAfterViewInit() {
    if (this.bottomSheetRef?.nativeElement) {
      this.extraSpaceStyling = {
        height: `${this.bottomSheetRef.nativeElement.offsetHeight}px`,
      };
    }
  }

  onOrderInstruction(orderInstruction: OrderInstruction) {
    this.updateOrder(orderInstruction);
    this.renderBottomSheet();
  }

  onOrderPlaced() {
    this.isOrderConfirmation = true;
    this.showBottomSheet = false;
  }

  onConfirmationButtonClick(buttonName: string) {
    switch (buttonName) {
      case ConfirmationButton.Proceed: {
        this.orderConfirmed = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 5000);
        break;
      }
      case ConfirmationButton.Cancel: {
        this.isOrderConfirmation = false;
        this.showBottomSheet = true;
        break;
      }
      case ConfirmationButton.Home: {
        this.router.navigate(['']);
        break;
      }
    }
  }

  private updateOrder(orderInstruction: OrderInstruction) {
    this.orderItems.push({
      title: orderInstruction.title,
      price: orderInstruction.price,
      qty: orderInstruction.qty,
    });
    this.orderSummary.updateOrder(this.orderItems);
  }

  private renderBottomSheet() {
    this.showBottomSheet = true;
    setTimeout(() => {
      if (this.bottomSheetRef?.nativeElement) {
        this.extraSpaceStyling = {
          height: `${this.bottomSheetRef.nativeElement.offsetHeight}px`,
        };
      }
    });
  }
}
