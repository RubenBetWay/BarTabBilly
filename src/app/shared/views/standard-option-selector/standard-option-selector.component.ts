import { Component, Input } from '@angular/core';
import { StandardOptionSelectorConfig } from './standard-option-selector.model';

@Component({
  selector: 'app-standard-option-selector',
  templateUrl: './standard-option-selector.component.html',
  styleUrls: ['./standard-option-selector.component.scss'],
})
export class StandardOptionSelectorComponent {
  @Input() config: StandardOptionSelectorConfig | undefined;
}
