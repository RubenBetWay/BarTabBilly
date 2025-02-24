import { Injectable } from '@angular/core';
import { AppData, Friend, InitialData, OrderData, TabData } from './data.model';
import { IdGeneratorService } from '../id-generator/id-generator.service';
import { PersonalDetails } from '../../views/personal-details-form/personal-details-form.model';
import { OrderItem } from '../../views/order-summary/order-summary.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: AppData | undefined;

  get hasData() {
    return localStorage.getItem('bar-tab-billy') !== null;
  }

  constructor(private idGeneratorService: IdGeneratorService) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();
  }

  openTab(isJustMe: boolean, addedParties: Friend[]) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();

    if (!this.data) return;
    this.data.tabs.push({
      id: this.idGeneratorService.generateRandomID(),
      isJustMe: isJustMe,
      addedParties: addedParties,
      isSettled: false,
      openTimeStamp: new Date(),
      orders: [],
    });

    this.writeData(this.data);
  }

  addFriend(personalDetails: PersonalDetails) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();

    const friend: Friend = Object.assign(
      {},
      { id: this.idGeneratorService.generateRandomID() },
      personalDetails
    );

    if (!this.data) return;
    if (!this.data.friends) this.data.friends = [friend];
    else this.data?.friends.push(friend);

    this.writeData(this.data);
  }

  placeOrder(tabID: string, orderItems: OrderItem[]) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();

    if (!this.data) return;
    let tab = this.data.tabs.find((tab: TabData) => tab.id === tabID);

    if (!tab) return;
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

    this.writeData(this.data);
  }

  getTabByID(tabID: string): TabData | undefined{
    this.data = this.callLatestData();

    if (!this.data) return;
    const tab = this.data.tabs.find((tab: TabData) => tab.id === tabID);

    return tab
  }

  settleTab(tabID: string){
    this.data = this.callLatestData();

    if (!this.data) return;
    let tab = this.data.tabs.find((tab: TabData) => tab.id === tabID);

    if (!tab) return;
    tab.isSettled = true

    this.writeData(this.data);
  }

  private callLatestData() {
    if (!this.hasData) return;
    return JSON.parse(localStorage.getItem('bar-tab-billy')!);
  }

  private intialiseData() {
    this.writeData(InitialData);
  }

  private writeData(data: AppData) {
    localStorage.setItem('bar-tab-billy', JSON.stringify(data));
  }
}
