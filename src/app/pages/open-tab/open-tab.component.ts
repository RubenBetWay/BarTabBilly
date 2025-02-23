import { Component } from '@angular/core';
import { OpenTabViewState } from './open-tab.const';
import { OpenTabInitialAnswer } from './views/initial/initial.const';
import { ConfirmationResponse } from './views/open-tab-confirmation/open-tab-confirmation.const';
import { DataService } from 'src/app/shared/services/data/data.service';
import { ConfirmedResponse } from './views/open-tab-confirmed/open-tab-confirmed.const';
import { Route, Router } from '@angular/router';
import { NoFriendsQuestionResponse } from './views/add-tab-parties/add-tab-parties.const';
import { Friend } from 'src/app/shared/services/data/data.model';

@Component({
  selector: 'app-open-tab',
  templateUrl: './open-tab.component.html',
  styleUrls: ['./open-tab.component.scss'],
})
export class OpenTabPage {
  viewState = OpenTabViewState;
  currentViewState = OpenTabViewState.Initial;
  isJustMe = false;
  addedParties: Friend[] = []

  constructor(private dataService: DataService, private router: Router) {}

  onInitialAnswer(answer: string) {
    switch (answer as OpenTabInitialAnswer) {
      case OpenTabInitialAnswer.JustMe: {
        this.currentViewState = OpenTabViewState.Confirmation;
        this.isJustMe = true;
        break;
      }
      case OpenTabInitialAnswer.WithFriends: {
        this.currentViewState = OpenTabViewState.AddTabParties;
        this.isJustMe = false;
        break;
      }
    }
  }

  onNoFriendsAnswer(answer: string){
    switch (answer as NoFriendsQuestionResponse) {
      case NoFriendsQuestionResponse.Add: {
        this.currentViewState = OpenTabViewState.AddFriend;
        break;
      }
      case NoFriendsQuestionResponse.JustMe: {
        this.currentViewState = OpenTabViewState.Confirmation;
        this.isJustMe = true;
        break;
      }
    }
  }

  onTabPartiesSelected(addedParties: Friend[]){
    this.addedParties = addedParties
    this.currentViewState = OpenTabViewState.Confirmation;
  }

  onDoneAddingFriends(){
    this.currentViewState = OpenTabViewState.AddTabParties;
  }

  onConfirmationResponse(answer: string) {
    switch (answer as ConfirmationResponse) {
      case ConfirmationResponse.Confirm: {
        this.currentViewState = OpenTabViewState.Confirmed;
        this.dataService.openTab(this.isJustMe, this.addedParties);
        break;
      }
      case ConfirmationResponse.Reject: {
        this.currentViewState = OpenTabViewState.Initial;
        this.isJustMe = false;
        break;
      }
    }
  }

  onConfirmedResponse(answer: string) {
    switch (answer as ConfirmedResponse) {
      case ConfirmedResponse.Order: {
        this.router.navigate(['order'])
        break;
      }
      case ConfirmedResponse.Deffer: {
        this.router.navigate([''])
        break;
      }
    }
  }
}
