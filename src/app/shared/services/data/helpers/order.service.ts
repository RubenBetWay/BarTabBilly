import { Injectable } from '@angular/core';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import {
  AppData,
  TabData,
  OrderData,
  AggregatedItemOrdered,
} from '../data.model';
import { IdGeneratorService } from './id-generator.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private idGeneratorService: IdGeneratorService) {}

  placeOrder(
    data: AppData,
    tabID: string,
    orderItems: OrderItem[]
  ): AppData | null {
    if (!data) return null;
    let tab = data.tabs.find((tab: TabData) => tab.id === tabID);

    if (!tab) return null;
    let totalValue = 0;
    orderItems.forEach(
      (orderItem: OrderItem) => (totalValue += orderItem.qty * orderItem.price)
    );
    const order: OrderData = {
      id: this.idGeneratorService.generateRandomID(),
      orderTimeStamp: new Date(),
      orderItems: orderItems,
      totalValue: totalValue,
    };
    if (tab.orders) tab.orders.push(order);
    else tab.orders = [order];

    tab.itemsOrderedSummary = this.updateItemsOrderedSummary(tab);

    return data;
  }

  private updateItemsOrderedSummary(tab: TabData): AggregatedItemOrdered[]  {
    if (!tab) return [];

    // Reset the current itemsOrderedSummary for the tab
    let summary: AggregatedItemOrdered[] = tab.itemsOrderedSummary;
    summary = [];

    // Go through each order
    tab.orders.forEach((order: OrderData) => {
      // Go through each line item
      order.orderItems.forEach((item: OrderItem) => {
        const itemIndex = summary.findIndex(
          (aggItem: AggregatedItemOrdered) => aggItem.title === item.title
        );
        if (itemIndex >= 0) {
          summary[itemIndex].qty += item.qty;
          summary[itemIndex].subtotal += item.qty * item.price
        }
        else
          summary.push(
            Object.assign({}, item, { subtotal: item.qty * item.price })
          );
      });
    });

    return summary;
  }
}
