import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum ConfirmedResponse {
  Order = 'order',
  Deffer = 'deffer'
} 

export const PlaceOrderButton: ButtonConfig = {
  name: ConfirmedResponse.Order,
  text: `Let's get some drinks!`, 
  size: ButtonSize.Large, 
  color: 'aquamarine',
}

export const DefferOrderButton: ButtonConfig = {
  name: ConfirmedResponse.Deffer,
  text: 'Let me think about it', 
  size: ButtonSize.Large, 
  color: 'lightblue',
}  