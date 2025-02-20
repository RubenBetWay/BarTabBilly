import { Component } from '@angular/core';
import { ButtonConfig, ButtonSize } from 'src/app/shared/components/button/button.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  menuOptions: ButtonConfig[] = [
    {text: 'Order Round', size: ButtonSize.Large},
    {text: 'Settle Tab', size: ButtonSize.Large}
  ]
}
