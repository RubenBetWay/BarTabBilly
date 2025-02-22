import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum OpenTabInitialAnswer {
  JustMe = 'just-me',
  WithFriends = 'with-friends'
} 

export const JustMeButton: ButtonConfig = {
  name: OpenTabInitialAnswer.JustMe,
  text: 'Just Me', 
  size: ButtonSize.Large, 
}

export const WithFriendsButton: ButtonConfig = {
  name: OpenTabInitialAnswer.WithFriends,
  text: 'With Friends', 
  size: ButtonSize.Large, 
}  