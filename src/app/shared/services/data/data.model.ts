import { PersonalDetails } from "../../views/personal-details-form/personal-details-form.model"

export interface AppData {
  userDetails: PersonalDetails
  tabs: TabData[]
  friends: PersonalDetails[]
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

