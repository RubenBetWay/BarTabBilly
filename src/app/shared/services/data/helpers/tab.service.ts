import { Injectable } from '@angular/core';
import { AppData, Friend, TabData } from '../data.model';
import { IdGeneratorService } from './id-generator.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor(private idGeneratorService: IdGeneratorService) {}

  openTab(
    data: AppData,
    isJustMe: boolean,
    addedParties: Friend[]
  ): AppData | null {
    if (!data) return null;
    data.tabs.push({
      id: this.idGeneratorService.generateRandomID(),
      isJustMe: isJustMe,
      addedParties: addedParties,
      isSettled: false,
      openTimeStamp: new Date(),
      orders: [],
      itemsOrderedSummary: [],
    });

    return data;
  }

  settleTab(data: AppData, tabID: string): AppData | null {
    if (!data) return null;
    let tab = data.tabs.find((tab: TabData) => tab.id === tabID);

    if (!tab) return null;
    tab.isSettled = true;
    tab.settledTimeStamp = new Date();

    return data;
  }

  getTabByID(data: AppData, tabID: string): TabData | undefined {
    if (!data) null;
    const tab = data.tabs.find((tab: TabData) => tab.id === tabID);

    return tab;
  }
}
