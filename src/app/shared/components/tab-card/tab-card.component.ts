import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderData, TabData } from '../../services/data/data.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.scss'],
})
export class TabCardComponent implements OnInit {
  @Input() tab: TabData | undefined;
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();

  tabTotal = 0;
  numberOfOrders = 0;

  ngOnInit() {
    if (!this.tab) return;
    this.numberOfOrders = this.tab.orders.length;
    this.tab.orders.forEach(
      (order: OrderData) => (this.tabTotal += order.totalValue)
    );
  }
}
