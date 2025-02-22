import { Component } from '@angular/core';
import { OpenTabViewState } from './open-tab.const';
import { OpenTabInitialAnswer } from './views/initial/initial.const';

@Component({
  selector: 'app-open-tab',
  templateUrl: './open-tab.component.html',
  styleUrls: ['./open-tab.component.scss'],
})
export class OpenTabPage {
  viewState = OpenTabViewState;
  currentViewState = OpenTabViewState.Initial;


  onInitialAnswer(answer: string){
    switch(answer as OpenTabInitialAnswer) {
      case OpenTabInitialAnswer.JustMe: {
        this.currentViewState = OpenTabViewState.Confirmation
        break
      }
      case OpenTabInitialAnswer.WithFriends: {
        this.currentViewState = OpenTabViewState.AddTabParties
        break
      }
    }

  }
}
