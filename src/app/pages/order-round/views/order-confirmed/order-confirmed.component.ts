import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmedButton } from './order-confirmed.const';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss'],
})
export class OrderConfirmedComponent {
  confirmedButton = ConfirmedButton

  constructor(private router: Router) {
    console.log('OrderConfirmedComponent')
  }
  
  onConfirmationButtonClick(buttonName: string) {
    this.router.navigate(['']);
  }
}
