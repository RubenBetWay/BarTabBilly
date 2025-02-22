import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  
  get hasData(){
    return localStorage.getItem("bar-tab-billy") !== null
  }
}
