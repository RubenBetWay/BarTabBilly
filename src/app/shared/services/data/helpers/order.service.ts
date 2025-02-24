import { Injectable } from '@angular/core';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';
import { AppData, TabData, OrderData } from '../data.model';
import { IdGeneratorService } from './id-generator.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private idGeneratorService: IdGeneratorService) {}

  placeOrder(data: AppData, tabID: string, orderItems: OrderItem[]): AppData | null {
    if (!data) return null;
    let tab = data.tabs.find((tab: TabData) => tab.id === tabID);

    if (!tab) return null
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

    return data
  }
}
