import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-toggle',
  templateUrl: './quantity-toggle.component.html',
  styleUrls: ['./quantity-toggle.component.scss']
})
export class QuantityToggleComponent {
  @Output() latestQty: EventEmitter<number> = new EventEmitter()
  
  quantity: number = 0;

  resetToZero() {
    this.quantity = 0
    this.latestQty.emit(this.quantity)
  }

  increment() {
    this.quantity++;
    this.latestQty.emit(this.quantity)
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
      this.latestQty.emit(this.quantity)
    }
  }
}
