import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import {
  AddDescriptionsActions,
  CancelButton,
  DoneButton,
} from './add-description.const';
import { StandardOptionSelectorConfig } from 'src/app/shared/views/standard-option-selector/standard-option-selector.model';

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent {
  @Output() onDescriptionAdded = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();

  config: StandardOptionSelectorConfig = {
    subHeader: 'Please add a description name for this tab',
    minorHeader: '(Better to identify later)',
    buttons: [CancelButton],
  };

  description = '';

  onDescriptionChange(): void {
    this.config.buttons = this.description.trim() !== ''
      ? [DoneButton, CancelButton]
      : [CancelButton];
  }

  onButtonClicked = (buttonName: string): void => {
    if (buttonName === AddDescriptionsActions.Done)
      this.onDescriptionAdded.emit(this.description);
    else if (buttonName === AddDescriptionsActions.Cancel) this.onCancel.emit();
  };
}
