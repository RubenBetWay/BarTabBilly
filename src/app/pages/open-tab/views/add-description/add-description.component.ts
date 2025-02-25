import { Component, EventEmitter, Output } from '@angular/core';
import {
  AddDescriptionsActions,
  CancelButton,
  DoneButton,
} from './add-description.const';

@Component({
  selector: 'app-add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent {
  @Output() onDescriptionAdded: EventEmitter<string> = new EventEmitter();
  @Output() onCancel: EventEmitter<string> = new EventEmitter();

  description = '';
  doneButton = DoneButton;
  cancelButton = CancelButton;

  onActionButtonClicked(buttonName: string) {
    switch (buttonName as AddDescriptionsActions) {
      case AddDescriptionsActions.Done: {
        this.onDescriptionAdded.emit(this.description);
        break;
      }
      case AddDescriptionsActions.Cancel: {
        this.onCancel.emit();
      }
    }
  }
}
