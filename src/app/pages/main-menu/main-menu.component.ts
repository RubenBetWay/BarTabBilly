import { Component } from '@angular/core';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OpenButton, OrderButton, SettleButton } from './main-menu.const';
import { TabData } from 'src/app/shared/services/data/data.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuPage {
  menuOptions: ButtonConfig[] = [];

  constructor(private dataService: DataService) {
    this.menuOptions = [OpenButton];

    // Check if there are any open tabs
    if (!dataService.data) return;
    if (!dataService.data.tabs) return;
    const openTabs = dataService.data.tabs.filter(
      (tab: TabData) => !tab.isSettled
    );    
    
    if (openTabs.length > 0 )
      this.menuOptions.push(OrderButton, SettleButton)
  }
}
