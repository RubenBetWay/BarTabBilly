import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ConfirmationButton,
  ConfirmationButtons,
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
  @Output() onConfirmation: EventEmitter<void[]> = new EventEmitter();
  @Output() onConfirmationCancelled: EventEmitter<void[]> = new EventEmitter();

  confirmationButtons = ConfirmationButtons;
  aggregateSummary: OrderItem[] = [];
  showDetail = false;

  ngOnInit() {
    if (!this.orderItems) return;
    this.setAggregateSummary();
    this.showDetail =
      this.orderItems.length !== this.aggregateSummary.length;
  }

  onConfirmationButtonClick(buttonName: string) {
    switch (buttonName) {
      case ConfirmationButton.Proceed: {
        this.onConfirmation.emit();
        break;
      }
      case ConfirmationButton.Cancel: {
        this.onConfirmationCancelled.emit();
        break;
      }
    }
  }

  private setAggregateSummary() {
    if (!this.orderItems) return;
    const aggregatedMap = new Map<string, OrderItem>();

    this.orderItems.forEach(({ title, price, qty }) => {
      if (aggregatedMap.has(title)) {
        aggregatedMap.get(title)!.qty += qty;
      } else {
        aggregatedMap.set(title, { title, price, qty });
      }
    });

    this.aggregateSummary = Array.from(aggregatedMap.values());
  }
}
