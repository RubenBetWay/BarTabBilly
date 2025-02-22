import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { JustMeButton, OpenTabInitialAnswer, WithFriendsButton } from './initial.const';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss'],
})
export class InitialComponent {
  @Output() onAnswer: EventEmitter<string> = new EventEmitter();

  openTabInitialAnswer = OpenTabInitialAnswer

  menuOptions: ButtonConfig[] = [
    JustMeButton, 
    WithFriendsButton
  ];
}
