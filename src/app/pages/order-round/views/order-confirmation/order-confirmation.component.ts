import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ConfirmationButton,
  ConfirmationButtons,
  ConfirmedButton,
} from './order-confirmation.const';
import { Router } from '@angular/router';
import { OrderItem } from 'src/app/shared/views/order-summary/order-summary.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent {
  @Input() orderItems: OrderItem[] | undefined;
  @Output() onConfirmationCancelled: EventEmitter<void[]> = new EventEmitter()
  
  showBottomSheet = false;
  orderConfirmed = false;
  confirmationButtons = ConfirmationButtons;
  confirmedButton = ConfirmedButton;

  constructor(private router: Router) {}

  onConfirmationButtonClick(buttonName: string) {
    switch (buttonName) {
      case ConfirmationButton.Proceed: {
        this.orderConfirmed = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 5000);
        break;
      }
      case ConfirmationButton.Cancel: {
        this.onConfirmationCancelled.emit()
        break;
      }
      case ConfirmationButton.Home: {
        this.router.navigate(['']);
        break;
      }
    }
  }
}
