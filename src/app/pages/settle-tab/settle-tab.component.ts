import { Component } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { OrderViewState } from './settle-tab.const';

@Component({
  selector: 'app-settle-tab',
  templateUrl: './settle-tab.component.html',
  styleUrls: ['./settle-tab.component.scss'],
})
export class SettleTabPage {
  viewState = OrderViewState;
  currentViewState = OrderViewState.SelectTab
  selectedTabID: string | undefined


    onTabSelected(tabID: string){
      this.selectedTabID = tabID
      this.currentViewState = OrderViewState.TabSummary
    }
  
}
