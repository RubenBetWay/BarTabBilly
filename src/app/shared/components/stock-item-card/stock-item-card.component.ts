import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { StockItemCardConfig } from './stock-item-card.model';
import { QuantityToggleComponent } from '../quantity-toggle/quantity-toggle.component';
import { ButtonConfig, ButtonSize } from '../button/button.model';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss'],
})
export class StockItemCardComponent {
  @Input() config: StockItemCardConfig | undefined;
  @ViewChild('quantityToggleComponent')
  quantityToggleComponent!: QuantityToggleComponent;

  subtotal: number = 0;
  addButtonConfig: ButtonConfig = {
    text: 'Add',
    size: ButtonSize.Small,
    color: 'aquamarine',
  };

  onAddClick() {
    if (this.quantityToggleComponent) {
      this.quantityToggleComponent.resetToZero();
    } else {
      console.error('QuantityToggleComponent is not available!');
    }
  }

  onQtyChange(qty: number) {
    if (this.config?.price) {
      this.subtotal = qty * this.config.price;
    }
  }
}
