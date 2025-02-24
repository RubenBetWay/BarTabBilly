import { Component } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OrderViewState } from './settle-tab.const';
import { SelectTabUse } from 'src/app/shared/views/select-tab/select-tab.const';
import { SettleTabSummaryOption } from './views/tab-summary/tab-summary.const';
import { TabSplitActionButton } from './views/tab-split/teb-split.const';
import { TabSettleConfirmationActionButton } from './views/settlement-confirmed/settlement-confirmed.const';

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
          this.dataService.settleTab(this.tab.id);
          this.tab = this.dataService.getTabByID(this.tab.id)
          this.currentViewState = OrderViewState.Confirmed;
        } else this.currentViewState = OrderViewState.TabSplit;
        break;
      }
      case SettleTabSummaryOption.Cancel: {
        this.currentViewState = OrderViewState.SelectTab;
        break;
      }
    }
  }

  onTabSplitActionButtonClicked(buttonName: string) {
    switch (buttonName as TabSplitActionButton) {
      case TabSplitActionButton.Proceed: {
        if (!this.tab) return;
        this.dataService.settleTab(this.tab.id);
        this.currentViewState = OrderViewState.Confirmed;
        break;
      }
      case TabSplitActionButton.Cancel: {
        console.log('here')
        this.currentViewState = OrderViewState.SelectTab;
        break;
      }
    }
  }

  onConfirmationActionButtonClicked(buttonName: string){
    switch (buttonName as TabSettleConfirmationActionButton) {
      case TabSettleConfirmationActionButton.Accept: {
        this.currentViewState = OrderViewState.Receipt;
        break;
      }
      case TabSettleConfirmationActionButton.Reject: {
        this.currentViewState = OrderViewState.SelectTab;
        break;
      }
    }
  }
}
