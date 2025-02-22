import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { OrderItem } from './order-summary.model';
import {
  OrderSummaryButtonNames,
  ClosedStateButtons,
  OpenStateButtons,
} from './order-summary.const';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  orderItems: OrderItem[] = [];
  orderTotal = 0;
  superSummaryButtons = ClosedStateButtons;
  showDetails = false

  updateOrder(orderItems: OrderItem[]) {
    this.orderItems = orderItems;
    this.tallyOrder();
  }

  onButtonClick(buttonName: string) {
    switch (buttonName) {
      case OrderSummaryButtonNames.View: {
        this.superSummaryButtons = OpenStateButtons
        this.showDetails = true
        break;
      }
      case OrderSummaryButtonNames.Close: {
        this.superSummaryButtons = ClosedStateButtons;
        this.showDetails = false
        break;
      }
      case OrderSummaryButtonNames.Order: {
        break;
      }
    }
  }

  private tallyOrder() {
    if (!this.orderItems) return;
    this.orderTotal = 0;
    this.orderItems.forEach(
      (orderItem) => (this.orderTotal += orderItem.qty * orderItem.price)
    );
  }
}
