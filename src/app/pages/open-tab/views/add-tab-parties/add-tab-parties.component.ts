import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';
import { AddFriendsButton, JustMeButton } from './add-tab-parties.const';
import { ButtonConfig } from 'src/app/shared/components/button/button.model';

@Component({
  selector: 'app-add-tab-parties',
  templateUrl: './add-tab-parties.component.html',
  styleUrls: ['./add-tab-parties.component.scss'],
})
export class AddTabPartiesComponent {
  @Output() onAnswer: EventEmitter<string> = new EventEmitter();
  
  hasFriends = false;

  noFriendsOptions: ButtonConfig[] = [AddFriendsButton, JustMeButton];

  constructor(private dataService: DataService) {
    if (!dataService.hasData) return; // hasFriends remains false

    // At this point we have confirmed this - but lets keep it tight
    if (this.dataService.data) {
      this.hasFriends = this.dataService.data.friends.length > 0;
    }
  }
}
