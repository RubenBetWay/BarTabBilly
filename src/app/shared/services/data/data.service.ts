import { Injectable } from '@angular/core';
import { AppData, Friend, InitialData } from './data.model';
import { IdGeneratorService } from '../id-generator/id-generator.service';
import { PersonalDetails } from '../../views/personal-details-form/personal-details-form.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: AppData | undefined;

  get hasData() {
    return localStorage.getItem('bar-tab-billy') !== null;
  }

  constructor(private idGeneratorService: IdGeneratorService) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();
  }

  openTab(isJustMe: boolean, addedParties: Friend[]) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();

    this.data?.tabs.push({
      id: this.idGeneratorService.generateRandomID(),
      isJustMe: isJustMe,
      addedParties: addedParties
    });
    this.writeData(this.data!);
  }

  addFriend(personalDetails: PersonalDetails) {
    if (!this.hasData) this.intialiseData();

    this.data = this.callLatestData();

    const friend: Friend = Object.assign(
      {},
      { id: this.idGeneratorService.generateRandomID() },
      personalDetails
    );

    if (!this.data) return;
    if (!this.data.friends) this.data.friends = [friend];
    else this.data?.friends.push(friend);

    this.writeData(this.data!);
  }

  private callLatestData() {
    if (!this.hasData) return;
    return JSON.parse(localStorage.getItem('bar-tab-billy')!);
  }

  private intialiseData() {
    this.writeData(InitialData);
  }

  private writeData(data: AppData) {
    localStorage.setItem('bar-tab-billy', JSON.stringify(data));
  }
}
