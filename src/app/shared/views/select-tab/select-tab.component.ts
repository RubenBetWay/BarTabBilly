import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';
import { DataService } from 'src/app/shared/services/data/data.service';
import { SelectTabUse } from './select-tab.const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-tab',
  templateUrl: './select-tab.component.html',
  styleUrls: ['./select-tab.component.scss']
})
export class SelectTabComponent {
  @Input() use: SelectTabUse | undefined
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();
  
  selectTabUse = SelectTabUse
  openTabs: TabData[] = [];

  constructor(private dataService: DataService, private router: Router) {
    // Should not be able to access this page if
    // there are no unsettled tabs - so we are
    // just going to place guards in place
    if (!dataService.data) return;
    if (!dataService.data.tabs) return
    this.openTabs = dataService.data.tabs.filter(
      (tab: TabData) => !tab.isSettled
    );

    // If there are no open tabs, you should not be here
    if (this.openTabs.length === 0)
      this.router.navigate([''])
  }
}
