import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { PersonalDetails } from 'src/app/shared/views/personal-details-form/personal-details-form.model';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
})
export class AddFriendComponent {
  @Output() done: EventEmitter<void> = new EventEmitter();

  constructor(private dataService: DataService) {}

  onFriendAdded(personalDetails: PersonalDetails) {
    this.dataService.addFriend(personalDetails);
  }
}
