import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  partyMap: Map<string, Friend> = new Map()
  form: FormGroup = new FormGroup({});
  tabTotal = 0;
  totalFactor = 0

  ngOnInit() {
    if (!this.tab) return;
    this.setData();
    this.setForm()
    this.setTotalFactor()
  }

  onFactorChange(){
    this.setTotalFactor()
  }

  private setData() {
    if (!this.tab) return;

    if (!this.tab.addedParties || !this.tab.orders) return;
    this.tab.addedParties.forEach((party: Friend) => this.parties.push(party));
    this.tab.orders.forEach(
      (order: OrderData) => (this.tabTotal += order.totalValue)
    );
  }

  private setForm() {
    this.parties.forEach((party: Friend) => {
      this.form.addControl(party.id, new FormControl(1))
      this.partyMap.set(party.id, party)
    }
    );
  }

  private setTotalFactor(){
    this.totalFactor = 0; 
    const factors = Object.values(this.form.value) as number[]
    factors.forEach((value: number) => this.totalFactor += value)
 }
}
