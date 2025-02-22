import { Component } from '@angular/core';
import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';
import { PersistenceService } from 'src/app/shared/services/persistence/persistence.service';
import { OpenButton, OrderButton, SettleButton } from './main-menu.const';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuPage {
  menuOptions: ButtonConfig[] = [];

  constructor(private persistenceService: PersistenceService) {
    if (persistenceService.hasData)
      this.menuOptions = [OrderButton, SettleButton];
    else this.menuOptions = [OpenButton];
  }
}
