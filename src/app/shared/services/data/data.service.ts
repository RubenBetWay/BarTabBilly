import { Injectable } from '@angular/core';
import { AppData, InitialData } from './data.model';
import { IdGeneratorService } from '../id-generator/id-generator.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: AppData | undefined

  get hasData(){
    return localStorage.getItem("bar-tab-billy") !== null
  }

  constructor(private idGeneratorService: IdGeneratorService){}

  openTab(isJustMe: boolean){
    if (!this.hasData)
      this.intialiseData()
    
    this.data = this.callLatestData()
    
    this.data?.tabs.push({
      id: this.idGeneratorService.generateRandomID(),
      isJustMe: isJustMe
    })
    this.writeData(this.data!)
  }

  private callLatestData(){
    if (!this.hasData) return
    return JSON.parse(localStorage.getItem("bar-tab-billy")!)
  }

  private intialiseData(){
    this.writeData(InitialData)
  }

  private writeData(data: AppData){
    localStorage.setItem("bar-tab-billy", JSON.stringify(data));
  }
}
