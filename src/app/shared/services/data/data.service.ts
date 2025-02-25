import { Injectable } from '@angular/core';
import { AppData, Friend, InitialData, OrderData, TabData } from './data.model';
import { IdGeneratorService } from './helpers/id-generator.service';
import { PersonalDetails } from '../../views/personal-details-form/personal-details-form.model';
import { OrderItem } from '../../views/order-summary/order-summary.model';
import { FriendsService } from './helpers/friends.service';
import { TabService } from './helpers/tab.service';
import { OrderService } from './helpers/order.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: AppData | undefined;

  constructor(
    private friendService: FriendsService,
    private orderService: OrderService,
    private tabService: TabService
  ) {
    if (localStorage.getItem('bar-tab-billy') === null) this.intialiseData();
    this.data = this.callLatestData();
  }

  addFriend(personalDetails: PersonalDetails) {
    this.data = this.callLatestData();
    const upDatedData = this.friendService.addFriend(
      this.data,
      personalDetails
    );
    if (upDatedData) this.writeData(upDatedData);
  }

  openTab(description: string, isJustMe: boolean, addedParties: Friend[]) {
    this.data = this.callLatestData();
    const upDatedData = this.tabService.openTab(
      this.data,
      description,
      isJustMe, 
      addedParties
    );
    if (upDatedData) this.writeData(upDatedData);
  }

  getTabByID(tabID: string): TabData | undefined {
    this.data = this.callLatestData();
    return this.tabService.getTabByID(this.data, tabID)
  }

  placeOrder(tabID: string, orderItems: OrderItem[]) {
    this.data = this.callLatestData();
    const upDatedData = this.orderService.placeOrder(
      this.data,
      tabID, 
      orderItems
    );
    if (upDatedData) this.writeData(upDatedData);
  }

  settleTab(tabID: string) {
    this.data = this.callLatestData();
    const upDatedData = this.tabService.settleTab(
      this.data,
      tabID, 
    );
    if (upDatedData) this.writeData(upDatedData);
  }

  private callLatestData(): AppData {
    if (localStorage.getItem('bar-tab-billy') === null) this.intialiseData();
    return JSON.parse(localStorage.getItem('bar-tab-billy')!);
  }

  private intialiseData() {
    this.writeData(InitialData);
  }

  private writeData(data: AppData) {
    localStorage.setItem('bar-tab-billy', JSON.stringify(data));
  }
}
