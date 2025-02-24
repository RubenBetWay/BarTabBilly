import { Component, EventEmitter, Output } from '@angular/core';
import { TabSettleConfirmationButtons } from './settlement-confirmed.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settlement-confirmed',
  templateUrl: './settlement-confirmed.component.html',
  styleUrls: ['./settlement-confirmed.component.scss'],
})
export class SettlementConfirmedComponent {
  @Output() onActonButtonClicked: EventEmitter<string> = new EventEmitter();

  actionButtons = TabSettleConfirmationButtons;

  constructor(private router: Router) {}

  onConfirmationButtonClick() {
    this.router.navigate(['']);
  }
}
