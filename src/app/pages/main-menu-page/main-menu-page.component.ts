import { Component } from '@angular/core';
import { ButtonConfig, ButtonSize } from 'src/app/shared/components/button/button.model';

@Component({
  selector: 'app-main-menu-page',
  templateUrl: './main-menu-page.component.html',
  styleUrls: ['./main-menu-page.component.scss'],
})
export class MainMenuPageComponent {
   menuOptions: ButtonConfig[] = [
    { 
      text: 'Order Round', 
      size: ButtonSize.Large, 
      url: 'order' 
    },
    { 
      text: 'Settle Tab', 
      size: ButtonSize.Large, 
      url: 'settle' 
    },
  ];

}
