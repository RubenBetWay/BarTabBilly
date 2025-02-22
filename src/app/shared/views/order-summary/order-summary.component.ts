import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderItem } from './order-summary.model';
import { SuperSummaryButtons } from './order-summary.const';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent {
  orderItems: OrderItem[] =[]
  orderTotal = 0;
  superSummaryButtons = SuperSummaryButtons

  updateOrder(orderItems: OrderItem[]){
    this.orderItems = orderItems
    this.tallyOrder()
  }

  private tallyOrder(){
    if (!this.orderItems) return;
    this.orderItems.forEach(
      (orderItem) => (this.orderTotal += (orderItem.qty * orderItem.price))
    );
    console.log(this.orderTotal)
  }
}
