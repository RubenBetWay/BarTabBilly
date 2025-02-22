import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { OrderInstruction, StockItemCardConfig } from './stock-item-card.model';
import { QuantityToggleComponent } from '../quantity-toggle/quantity-toggle.component';
import { ButtonConfig, ButtonSize } from '../button/button.model';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss'],
})
export class StockItemCardComponent {
  @Input() config: StockItemCardConfig | undefined;
  @Output() addToOrder: EventEmitter<OrderInstruction> = new EventEmitter

  @ViewChild('quantityToggleComponent')
  quantityToggleComponent!: QuantityToggleComponent;

  qty = 0
  subtotal: number = 0;
  addButtonConfig: ButtonConfig = {
    name: 'add',
    text: 'Add',
    size: ButtonSize.Small,
    color: 'aquamarine',
  };

  onAddClick() {
    if (this.quantityToggleComponent) {
      const orderInstruction = Object.assign({}, this.config, {qty: this.qty})
      this.addToOrder.emit(Object.assign({}, this.config, {qty: this.qty}))
      this.quantityToggleComponent.resetToZero();
    } else {
      console.error('QuantityToggleComponent is not available!');
    }
  }

  onQtyChange(qty: number) {
    if (this.config?.price) {
      this.qty = qty
      this.subtotal = this.qty * this.config.price;
    }
  }
}
