import { Component } from '@angular/core';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { JustMeButton, WithFriendsButton } from './initial.const';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent {
  menuOptions: ButtonConfig[] = [
    JustMeButton, 
    WithFriendsButton
  ];
}
