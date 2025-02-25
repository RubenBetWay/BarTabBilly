import { OrderItem } from "../../views/order-summary/order-summary.model"
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
  description: string
  isJustMe: boolean,
  addedParties: Friend[]
  isSettled: boolean
  openTimeStamp: Date
  settledTimeStamp?: Date
  orders: OrderData[]
  itemsOrderedSummary: AggregatedItemOrdered[]
}

export interface OrderData {
  id: string
  orderTimeStamp: Date
  orderItems: OrderItem[]
  totalValue: number
}

export interface AggregatedItemOrdered extends OrderItem {
  subtotal: number
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

