import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { JustMeButton, OpenTabInitialAnswer, WithFriendsButton } from './how-to-split.const';

@Component({
  selector: 'app-how-to-split',
  templateUrl: './how-to-split.component.html',
  styleUrls: ['./how-to-split.component.scss'],
})
export class InitialComponent {
  @Output() onAnswer: EventEmitter<string> = new EventEmitter();

  openTabInitialAnswer = OpenTabInitialAnswer

  menuOptions: ButtonConfig[] = [
    JustMeButton, 
    WithFriendsButton
  ];
}
