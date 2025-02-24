import { Component } from '@angular/core';
import { ConfirmedButton } from './settlement-confirmed.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settlement-confirmed',
  templateUrl: './settlement-confirmed.component.html',
  styleUrls: ['./settlement-confirmed.component.scss'],
})
export class SettlementConfirmedComponent {
  confirmedButton = ConfirmedButton;

  constructor(private router: Router) {}

  onConfirmationButtonClick() {
    this.router.navigate(['']);
  }
}
