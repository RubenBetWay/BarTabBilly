import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OpenButton, OrderButton, SettleButton } from './main-menu.const';
import { StandardOptionSelectorConfig } from 'src/app/shared/views/standard-option-selector/standard-option-selector.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuPage {
  config: StandardOptionSelectorConfig;

  constructor(private dataService: DataService) {
    this.config = {
      subHeader: 'Bar Tab Billy',
      buttons: [OpenButton],
    };

    if (!dataService.data?.tabs) return;

    const openTabs = dataService.getOpenTabs();
    if (openTabs?.length) {
      this.config.buttons.push(OrderButton, SettleButton);
    }
  }
}
