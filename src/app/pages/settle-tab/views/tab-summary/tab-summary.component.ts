import { Component, Input } from '@angular/core';
import { TabData } from 'src/app/shared/services/data/data.model';

@Component({
  selector: 'app-tab-summary',
  templateUrl: './tab-summary.component.html',
  styleUrls: ['./tab-summary.component.scss']
})
export class TabSummaryComponent {
@Input() tab: TabData | undefined
}
