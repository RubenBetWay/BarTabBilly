import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { ConfirmButton, RejectButton } from './open-tab-confirmation.const';

@Component({
  selector: 'app-open-tab-confirmation',
  templateUrl: './open-tab-confirmation.component.html',
  styleUrls: ['./open-tab-confirmation.component.scss'],
})
export class OpenTabConfirmationComponent {
  @Input() isJustMe: boolean = false;
  @Output() onAnswer: EventEmitter<string> = new EventEmitter();
  
  options: ButtonConfig[] = [ConfirmButton, RejectButton];
}
