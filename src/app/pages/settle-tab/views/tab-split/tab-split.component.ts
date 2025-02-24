import { Component, Input, OnInit } from '@angular/core';
import {
  Friend,
  OrderData,
  TabData,
} from 'src/app/shared/services/data/data.model';

@Component({
  selector: 'app-tab-split',
  templateUrl: './tab-split.component.html',
  styleUrls: ['./tab-split.component.scss'],
})
export class TabSplitComponent implements OnInit {
  @Input() tab: TabData | undefined;

  parties: Friend[] = [
    {
      id: '',
      firstName: 'Me',
      lastName: '',
      email: '',
      number: '',
    },
  ];
  tabTotal = 0;

  ngOnInit() {
    if (!this.tab) return;

    if (!this.tab.addedParties || !this.tab.orders) return;
    this.tab.addedParties.forEach((party: Friend) => this.parties.push(party));
    this.tab.orders.forEach(
      (order: OrderData) => (this.tabTotal += order.totalValue)
    );
  }
}
