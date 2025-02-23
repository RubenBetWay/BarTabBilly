export interface AppData {
  userDetails: UserDetails
  tabs: TabData[]
  friends: UserDetails[]
}

export interface UserDetails {
  firstName: string,
  lastName: string,
}

export interface TabData {
  id: string
  isJustMe: boolean
}

export const InitialData: AppData = {
  userDetails: {
    firstName: '',
    lastName: ''
  },
  friends: [],
  tabs: []
}  

