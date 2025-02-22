import { Component, EventEmitter, Output } from '@angular/core';
import { DefferOrderButton, PlaceOrderButton } from './open-tab-confirmed.const';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';

@Component({
  selector: 'app-open-tab-confirmed',
  templateUrl: './open-tab-confirmed.component.html',
  styleUrls: ['./open-tab-confirmed.component.scss'],
})
export class OpenTabConfirmedComponent {
  @Output() onAnswer: EventEmitter<string> = new EventEmitter();

  options: ButtonConfig[] = [PlaceOrderButton, DefferOrderButton];
}
