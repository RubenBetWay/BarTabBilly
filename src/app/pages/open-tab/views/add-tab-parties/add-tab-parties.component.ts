import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { AddFriendsButton, DoneButton, JustMeButton, JustMeWideButton } from './add-tab-parties.const';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';
import { PersonalDetails } from 'src/app/shared/views/personal-details-form/personal-details-form.model';
import { Friend } from 'src/app/shared/services/data/data.model';

@Component({
  selector: 'app-add-tab-parties',
  templateUrl: './add-tab-parties.component.html',
  styleUrls: ['./add-tab-parties.component.scss'],
})
export class AddTabPartiesComponent {
  @Output() onNoFriendsAnswer: EventEmitter<string> = new EventEmitter();
  @Output() onListSubmitted: EventEmitter<Friend[]> = new EventEmitter();

  hasFriends = false;
  noFriendsOptions: ButtonConfig[] = [AddFriendsButton, JustMeButton];
  
  availableFriends: Friend[] = [];
  selectedFriends: Friend[] = [];
  doneButton = DoneButton
  justMeWideButton = JustMeWideButton

  constructor(private dataService: DataService) {
    if (!dataService.data) return; // hasFriends remains false

    // At this point we have confirmed this - but lets keep it tight
    if (this.dataService.data) {
      this.hasFriends = this.dataService.data.friends.length > 0;
      if (this.hasFriends)
        this.availableFriends = this.dataService.data.friends;
    }
  }

  unselectFriend(clickedFriend: Friend) {
    this.availableFriends.push(clickedFriend);
    this.selectedFriends = this.selectedFriends.filter(
      (friend: Friend) => friend.id !== clickedFriend.id
    );
  }

  selectFriend(clickedFriend: Friend) {
    this.selectedFriends.push(clickedFriend);
    this.availableFriends = this.availableFriends.filter(
      (friend: Friend) => friend.id !== clickedFriend.id
    );
  }
}
