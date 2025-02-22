import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum OpenTabInitialViewButton {
  JustMe = 'just-me',
  WithFriends = 'with-friends'
} 

export const JustMeButton: ButtonConfig = {
  name: OpenTabInitialViewButton.JustMe,
  text: 'Just Me', 
  size: ButtonSize.Large, 
}

export const WithFriendsButton: ButtonConfig = {
  name: OpenTabInitialViewButton.WithFriends,
  text: 'With Friends', 
  size: ButtonSize.Large, 
}  