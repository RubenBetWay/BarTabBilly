import { Component } from '@angular/core';
import { OpenTabViewState } from './open-tab.const';
import { OpenTabInitialAnswer } from './views/how-to-split/how-to-split.const';
import { ConfirmationResponse } from './views/open-tab-confirmation/open-tab-confirmation.const';
import { DataService } from 'src/app/shared/services/data/data.service';
import { ConfirmedResponse } from './views/open-tab-confirmed/open-tab-confirmed.const';
import { Route, Router } from '@angular/router';
import { NoFriendsQuestionResponse } from './views/add-tab-parties/add-tab-parties.const';
import { Friend } from 'src/app/shared/services/data/data.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-open-tab',
  templateUrl: './open-tab.component.html',
  styleUrls: ['./open-tab.component.scss'],
})
export class OpenTabPage {
  viewState = OpenTabViewState;
  currentViewState = OpenTabViewState.HowToSplit;
  description = '';
  isJustMe = false;
  addedParties: Friend[] = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  onInitialAnswer(answer: string) {
    this.isJustMe = answer === OpenTabInitialAnswer.JustMe;
    this.changeView(OpenTabViewState.AddDescription);
  }

  onDescriptionAdded(description: string) {
    console.log(description)
    this.description = description;
    if (this.isJustMe) this.changeView(OpenTabViewState.Confirmation);
    else this.changeView(OpenTabViewState.AddTabParties);
  }

  onDescriptionCanceled(){
    this.changeView(OpenTabViewState.HowToSplit)
  }

  onNoFriendsAnswer(answer: string) {
    switch (answer as NoFriendsQuestionResponse) {
      case NoFriendsQuestionResponse.Add: {
        this.changeView(OpenTabViewState.AddFriend);
        break;
      }
      case NoFriendsQuestionResponse.JustMe: {
        this.changeView(OpenTabViewState.Confirmation);
        this.isJustMe = true;
        break;
      }
    }
  }

  onTabPartiesSelected(addedParties: Friend[]) {
    this.addedParties = addedParties;
    this.changeView(OpenTabViewState.Confirmation);
  }

  onAddFriendClicked() {
    this.changeView(OpenTabViewState.AddFriend);
  }

  onDoneAddingFriends() {
    this.changeView(OpenTabViewState.AddTabParties);
  }

  onConfirmationResponse(answer: string) {
    switch (answer as ConfirmationResponse) {
      case ConfirmationResponse.Confirm: {
        this.changeView(OpenTabViewState.Confirmed);
        this.dataService.openTab(
          this.description,
          this.isJustMe,
          this.addedParties
        );
        break;
      }
      case ConfirmationResponse.Reject: {
        this.changeView(OpenTabViewState.HowToSplit);
        this.isJustMe = false;
        break;
      }
    }
  }

  onConfirmedResponse(answer: string) {
    switch (answer as ConfirmedResponse) {
      case ConfirmedResponse.Order: {
        this.router.navigate(['order']);
        break;
      }
      case ConfirmedResponse.Deffer: {
        this.router.navigate(['']);
        break;
      }
    }
  }

  private changeView(view: OpenTabViewState) {
    this.currentViewState = view;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
