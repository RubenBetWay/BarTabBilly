import { Component } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OrderViewState } from './settle-tab.const';
import { SelectTabUse } from 'src/app/shared/views/select-tab/select-tab.const';
import { SettleTabSummaryOption } from './views/tab-summary/tab-summary.const';

@Component({
  selector: 'app-settle-tab',
  templateUrl: './settle-tab.component.html',
  styleUrls: ['./settle-tab.component.scss'],
})
export class SettleTabPage {
  viewState = OrderViewState;
  currentViewState = OrderViewState.SelectTab;
  selectTabUse = SelectTabUse;
  selectedTabID: string | undefined;
  tab: TabData | undefined;

  constructor(private dataService: DataService) {}

  onTabSelected(tabID: string) {
    this.tab = this.dataService.getTabByID(tabID);
    if (!this.tab) return;
    this.currentViewState = OrderViewState.TabSummary;
  }

  onSummaryResponse(buttonName: string) {
    switch (buttonName as SettleTabSummaryOption) {
      case SettleTabSummaryOption.Proceed: {
        if (this.tab?.isJustMe) {
          this.dataService.settleTab(this.tab.id)
          this.currentViewState = OrderViewState.Confirmed
        }
        else 
          this.currentViewState = OrderViewState.TabSplit

        break;
      }
      case SettleTabSummaryOption.Cancel: {
        this.currentViewState = OrderViewState.SelectTab;
        break;
      }
    }
  }
}
