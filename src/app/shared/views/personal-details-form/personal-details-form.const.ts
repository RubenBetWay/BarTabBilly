import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum PersonalDetailsFromResponse {
  AddAndNew = 'add-new',
  AddAndClose = 'add-close',
  Close = 'close'
} 

export const AddAndMoreButton: ButtonConfig = {
  name: PersonalDetailsFromResponse.AddAndNew,
  text: `Add and New`, 
  size: ButtonSize.Wide, 
  color: 'aquamarine',
}

export const AddAndCloseButton: ButtonConfig = {
  name: PersonalDetailsFromResponse.AddAndClose,
  text: 'Add and Close', 
  size: ButtonSize.Wide, 
  color: 'aquamarine',
}

export const CloseButton: ButtonConfig = {
  name: PersonalDetailsFromResponse.Close,
  text: 'Close', 
  size: ButtonSize.Wide, 
  color: 'lightblue',
} 