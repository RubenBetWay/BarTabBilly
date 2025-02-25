import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { DataService } from 'src/app/shared/services/data/data.service';
import { Friend } from 'src/app/shared/services/data/data.model';

import { OpenTabViewState } from './open-tab.const';
import { OpenTabInitialAnswer } from './views/how-to-split/how-to-split.const';
import { ConfirmationResponse } from './views/open-tab-confirmation/open-tab-confirmation.const';
import { ConfirmedResponse } from './views/open-tab-confirmed/open-tab-confirmed.const';
import { NoFriendsQuestionResponse } from './views/add-tab-parties/add-tab-parties.const';

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

  onHowToSplitCanceled() {
    this.router.navigate(['']);
  }

  onDescriptionAdded(description: string) {
    this.description = description;
    this.changeView(this.isJustMe ? OpenTabViewState.Confirmation : OpenTabViewState.AddTabParties);
  }

  onDescriptionCanceled() {
    this.changeView(OpenTabViewState.HowToSplit);
  }

  onNoFriendsAnswer(answer: string) {
    if (answer === NoFriendsQuestionResponse.Add) {
      this.changeView(OpenTabViewState.AddFriend);
      return;
    }
    this.isJustMe = true;
    this.changeView(OpenTabViewState.Confirmation);
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
    if (answer === ConfirmationResponse.Confirm) {
      this.dataService.openTab(this.description, this.isJustMe, this.addedParties);
      this.changeView(OpenTabViewState.Confirmed);
      return;
    }
    this.isJustMe = false;
    this.changeView(OpenTabViewState.HowToSplit);
  }

  onConfirmedResponse(answer: string) {
    this.router.navigate(answer === ConfirmedResponse.Order ? ['order'] : ['']);
  }

  private changeView(view: OpenTabViewState) {
    this.currentViewState = view;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
