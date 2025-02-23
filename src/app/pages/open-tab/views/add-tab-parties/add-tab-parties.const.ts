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