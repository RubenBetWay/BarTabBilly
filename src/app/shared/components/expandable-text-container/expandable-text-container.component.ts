import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-text-container',
  templateUrl: './expandable-text-container.component.html',
  styleUrls: ['./expandable-text-container.component.scss'],
})
export class ExpandableTextContainerComponent {
  @Input() text: string | undefined;
  
  isExpanded = false; 

  toggleText() {
    this.isExpanded = !this.isExpanded;
    console.log('Text expanded:', this.isExpanded);
  }
}
