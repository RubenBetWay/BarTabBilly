export interface AppData {
  userDetails: UserDetails
  tabs: TabData[]
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
  tabs: []
}  