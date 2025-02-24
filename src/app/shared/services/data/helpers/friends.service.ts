import { Injectable } from '@angular/core';
import { PersonalDetails } from 'src/app/shared/views/personal-details-form/personal-details-form.model';
import { AppData, Friend } from '../data.model';
import { IdGeneratorService } from './id-generator.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private idGeneratorService: IdGeneratorService) {}

  addFriend(data: AppData, personalDetails: PersonalDetails): AppData | null {
    const friend: Friend = Object.assign(
      {},
      { id: this.idGeneratorService.generateRandomID() },
      personalDetails
    );

    if (!data) return null
    if (!data.friends) data.friends = [friend];
    else data?.friends.push(friend);

    return data
  }}
