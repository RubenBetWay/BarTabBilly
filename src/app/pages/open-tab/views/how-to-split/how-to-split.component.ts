import { Component, EventEmitter, Output } from '@angular/core';
import {
  CancelButton,
  JustMeButton,
  WithFriendsButton,
} from './how-to-split.const';
import { StandardOptionSelectorConfig } from 'src/app/shared/views/standard-option-selector/standard-option-selector.model';

@Component({
  selector: 'app-how-to-split',
  templateUrl: './how-to-split.component.html',
  styleUrls: ['./how-to-split.component.scss'],
})
export class InitialComponent {
  @Output() onButtonClicked: EventEmitter<string> = new EventEmitter();

  config: StandardOptionSelectorConfig = {
    subHeader: 'Who will be spitting the tab',
    buttons: [JustMeButton, WithFriendsButton, CancelButton],
  };
}
