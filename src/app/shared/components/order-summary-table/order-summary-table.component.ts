import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderItem } from '../../views/order-summary/order-summary.model';

@Component({
  selector: 'app-order-summary-table',
  templateUrl: './order-summary-table.component.html',
  styleUrls: ['./order-summary-table.component.scss'],
})
export class OrderSummaryTableComponent implements OnChanges {
  @Input() orderItems: OrderItem[] = [];

  orderTotal = 0;
  private previousItems: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['orderItems']) {
      this.tallyOrder();
    }
  }

  ngDoCheck() {
    const currentItems = JSON.stringify(this.orderItems);
    if (this.previousItems !== currentItems) {
      this.previousItems = currentItems;
      this.tallyOrder();
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
