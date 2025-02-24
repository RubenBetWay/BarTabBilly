import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabData } from '../../services/data/data.model';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.scss'],
})
export class TabCardComponent {
  @Input() tab: TabData | undefined;
  @Output() tabSelected: EventEmitter<string> = new EventEmitter();
}
