import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum NoFriendsQuestionResponse {
  Add = 'add',
  JustMe = 'just-me',
} 

export const AddFriendsButton: ButtonConfig = {
  name: NoFriendsQuestionResponse.Add,
  text: `Lets add some friends`, 
  size: ButtonSize.Large, 
  color: 'aquamarine',
}

export const JustMeButton: ButtonConfig = {
  name: NoFriendsQuestionResponse.JustMe,
  text: 'Change it to Just Me', 
  size: ButtonSize.Large, 
  color: 'lightblue',
} 

export enum SelectedFriendsActions {
  Done = 'done',
  JustMe = 'just-me',
} 

export const SmallAddFriendsButton: ButtonConfig = {
  name: NoFriendsQuestionResponse.Add,
  text: `Add`, 
  size: ButtonSize.XSmall, 
  color: 'aquamarine',
}

export const DoneButton: ButtonConfig = {
  name: SelectedFriendsActions.Done,
  text: 'All Done', 
  size: ButtonSize.Wide, 
  color: 'aquamarine',
}  

export const JustMeWideButton: ButtonConfig = {
  name: SelectedFriendsActions.JustMe,
  text: 'Changed my mind, Just Me', 
  size: ButtonSize.Wide, 
  color: 'lightblue',
}  