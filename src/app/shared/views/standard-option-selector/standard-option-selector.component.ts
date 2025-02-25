import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StandardOptionSelectorConfig } from './standard-option-selector.model';
import { ButtonConfig } from '../../components/button/button.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-option-selector',
  templateUrl: './standard-option-selector.component.html',
  styleUrls: ['./standard-option-selector.component.scss'],
})
export class StandardOptionSelectorComponent {
  @Input() config: StandardOptionSelectorConfig | undefined;
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter()

  constructor(private router: Router){}

  onButtonClicked(button: ButtonConfig){
    if (button.url) this.router.navigate([button.url])
    else this.buttonClicked.emit(button.name)  
  }
}
