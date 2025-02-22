import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum ConfirmationResponse {
  Confirm = 'confirm',
  Reject = 'reject'
} 

export const ConfirmButton: ButtonConfig = {
  name: ConfirmationResponse.Confirm,
  text: `Yes Sir - Let's go!`, 
  size: ButtonSize.Large, 
  color: 'aquamarine',
}

export const RejectButton: ButtonConfig = {
  name: ConfirmationResponse.Reject,
  text: 'No - I changed my mind', 
  size: ButtonSize.Large, 
  color: 'lightblue',
}  