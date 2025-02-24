import { Component, EventEmitter, Output } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-select-tab',
  templateUrl: './select-tab.component.html',
  styleUrls: ['./select-tab.component.scss']
})
export class SelectTabComponent {
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();
  
  openTabs: TabData[] = [];

  constructor(private dataService: DataService) {
    // Should not be able to access this page if
    // there are no unsettled tabs - so we are
    // just going to place guards in place
    if (!dataService.data) return;
    if (!dataService.data.tabs) return;
    this.openTabs = dataService.data.tabs.filter(
      (tab: TabData) => !tab.isSettled
    );
  }
}
