import { Component } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { SettleViewState } from './settle-tab.const';
import { SelectTabUse } from 'src/app/shared/views/select-tab/select-tab.const';
import { SettleTabSummaryOption } from './views/tab-summary/tab-summary.const';
import { TabSplitActionButton } from './views/tab-split/teb-split.const';
import { TabSettleConfirmationActionButton } from './views/settlement-confirmed/settlement-confirmed.const';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-settle-tab',
  templateUrl: './settle-tab.component.html',
  styleUrls: ['./settle-tab.component.scss'],
})
export class SettleTabPage {
  viewState = SettleViewState;
  currentViewState = SettleViewState.SelectTab;
  selectTabUse = SelectTabUse;
  selectedTabID: string | undefined;
  tab: TabData | undefined;

  constructor(
    private dataService: DataService,
    private viewportScroller: ViewportScroller
  ) {}

  onTabSelected(tabID: string) {
    this.tab = this.dataService.getTabByID(tabID);
    if (!this.tab) return;
    this.changeView(SettleViewState.TabSummary);
  }

  onSummaryResponse(buttonName: string) {
    switch (buttonName as SettleTabSummaryOption) {
      case SettleTabSummaryOption.Proceed: {
        if (this.tab?.isJustMe) {
          this.dataService.settleTab(this.tab.id);
          this.tab = this.dataService.getTabByID(this.tab.id);
          this.changeView(SettleViewState.Confirmed);
        } else this.changeView(SettleViewState.TabSplit);
        break;
      }
      case SettleTabSummaryOption.Cancel: {
        this.changeView(SettleViewState.SelectTab);
        break;
      }
    }
  }

  onTabSplitActionButtonClicked(buttonName: string) {
    switch (buttonName as TabSplitActionButton) {
      case TabSplitActionButton.Proceed: {
        if (!this.tab) return;
        this.dataService.settleTab(this.tab.id);
        this.changeView(SettleViewState.Confirmed);

        break;
      }
      case TabSplitActionButton.Cancel: {
        console.log('here');
        this.changeView(SettleViewState.SelectTab);
        break;
      }
    }
  }

  onConfirmationActionButtonClicked(buttonName: string) {
    switch (buttonName as TabSettleConfirmationActionButton) {
      case TabSettleConfirmationActionButton.Accept: {
        this.changeView(SettleViewState.Receipt);
        break;
      }
      case TabSettleConfirmationActionButton.Reject: {
        this.changeView(SettleViewState.SelectTab);
        break;
      }
    }
  }

  private changeView(view: SettleViewState) {
    this.currentViewState = view;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
