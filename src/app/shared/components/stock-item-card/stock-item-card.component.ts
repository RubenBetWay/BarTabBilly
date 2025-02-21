import { Component, Input } from '@angular/core';
import { StockItemCardConfig } from './stock-item-card.model';

@Component({
  selector: 'app-stock-item-card',
  templateUrl: './stock-item-card.component.html',
  styleUrls: ['./stock-item-card.component.scss']
})
export class StockItemCardComponent {
@Input() config: StockItemCardConfig | undefined;
}
