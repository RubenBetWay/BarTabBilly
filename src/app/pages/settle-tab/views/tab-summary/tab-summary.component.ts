import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderData, TabData } from 'src/app/shared/services/data/data.model';
import { SettleTabSummaryButtons } from './tab-summary.const';

@Component({
  selector: 'app-tab-summary',
  templateUrl: './tab-summary.component.html',
  styleUrls: ['./tab-summary.component.scss'],
})
export class TabSummaryComponent implements OnInit {
  @Input() tab: TabData | undefined;
  @Output() onSummaryResponse: EventEmitter<string> = new EventEmitter();
  

  tabTotal = 0;
  actionButtons = SettleTabSummaryButtons;

  ngOnInit() {
    if (!this.tab) return;
    if (!this.tab.orders) return;
    this.tab.orders.forEach(
      (order: OrderData) => (this.tabTotal += order.totalValue)
    );
  }
}
