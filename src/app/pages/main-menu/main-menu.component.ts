import { Component } from '@angular/core';
import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OpenButton, OrderButton, SettleButton } from './main-menu.const';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuPage {
  menuOptions: ButtonConfig[] = [];

  constructor(private dataService: DataService) {
    if (dataService.hasData)
      this.menuOptions = [OpenButton, OrderButton, SettleButton];
    else this.menuOptions = [OpenButton];
  }
}
