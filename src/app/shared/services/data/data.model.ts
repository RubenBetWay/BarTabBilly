import { PersonalDetails } from "../../views/personal-details-form/personal-details-form.model"

export interface AppData {
  userDetails: PersonalDetails
  tabs: TabData[]
  friends: Friend[]
}

export interface Friend extends PersonalDetails {
  id: string
}

export interface TabData {
  id: string
  isJustMe: boolean
}

export const InitialData: AppData = {
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
    number: ''
  },
  friends: [],
  tabs: []
}  

