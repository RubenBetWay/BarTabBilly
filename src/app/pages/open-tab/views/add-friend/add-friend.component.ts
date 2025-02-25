import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { PersonalDetails } from 'src/app/shared/views/personal-details-form/personal-details-form.model';
import { StandardOptionSelectorConfig } from 'src/app/shared/views/standard-option-selector/standard-option-selector.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent {
  @Output() done: EventEmitter<void> = new EventEmitter();

    readonly config: StandardOptionSelectorConfig = {
      subHeader: 'Please complete the form to add a new friend',
      minorHeader: 'Submission buttons will render<br>when the form is complete',
      buttons: [], // Buttons are rendered by the personal-details-form
    };

  constructor(private dataService: DataService) {}

  onFriendAdded(personalDetails: PersonalDetails) {
    this.dataService.addFriend(personalDetails);
  }
}
