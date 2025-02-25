import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import {
  AddFriendsButton,
  DoneButton,
  JustMeButton,
  JustMeWideButton,
  SelectedFriendsActions,
  SmallAddFriendsButton,
} from './add-tab-parties.const';
import { Friend } from 'src/app/shared/services/data/data.model';
import { StandardOptionSelectorConfig } from 'src/app/shared/views/standard-option-selector/standard-option-selector.model';

@Component({
  selector: 'app-add-tab-parties',
  templateUrl: './add-tab-parties.component.html',
  styleUrls: ['./add-tab-parties.component.scss'],
})
export class AddTabPartiesComponent {
  @Output() onNoFriendsAnswer = new EventEmitter<string>();
  @Output() onListSubmitted = new EventEmitter<Friend[]>();
  @Output() onAddFriendClicked = new EventEmitter<void>();

  // Configuration for when there are no friends
  noFriendsConfig: StandardOptionSelectorConfig = {
    subHeader: `It seems that you don't have any friends just yet 
    that<br><br>What would you like to do?`,
    buttons: [AddFriendsButton, JustMeButton],
  };

  // Configuration for when there ARE friends
  friendsConfig: StandardOptionSelectorConfig = {
    subHeader: `Please settle the friends you would like to split this
    tab with`,
    buttons: [JustMeWideButton],
  };

  // State for available and selected friends
  hasFriends = false;
  availableFriends: Friend[] = [];
  selectedFriends: Friend[] = [];

  // Buttons and configurations
  smallAddFriendsButton = SmallAddFriendsButton;

  constructor(private dataService: DataService) {
    this.initializeFriendsData();
  }

  // Initialize friends data if available
  private initializeFriendsData(): void {
    const data = this.dataService.data;
    if (data?.friends?.length) {
      this.hasFriends = true;
      this.availableFriends = data.friends;
    }
  }

  onFriendsButtonClicked(buttonName: string){
    if (buttonName === SelectedFriendsActions.Done)
      this.onListSubmitted.emit(this.selectedFriends)
    else if (buttonName === SelectedFriendsActions.JustMe)
      this.onNoFriendsAnswer.emit(JustMeWideButton.name)
  }

  // Remove a friend from selected and add it back to available list
  unselectFriend(friend: Friend): void {
    this.selectedFriends = this.selectedFriends.filter(
      (f) => f.id !== friend.id
    );
    this.availableFriends.push(friend);
    this.updateButtons()
  }

  // Add a friend to selected and remove it from available list
  selectFriend(friend: Friend): void {
    this.selectedFriends.push(friend);
    this.availableFriends = this.availableFriends.filter(
      (f) => f.id !== friend.id
    );
    this.updateButtons()
  }

  private updateButtons() {
    this.friendsConfig.buttons =
      this.selectFriend.length === 0
        ? [JustMeWideButton]
        : [DoneButton, JustMeWideButton];
  }
}
