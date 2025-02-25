import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model"

export enum HowToSplitAnswer {
  JustMe = 'just-me',
  WithFriends = 'with-friends',
  Cancel = 'cancel'
} 

export const JustMeButton: ButtonConfig = {
  name: HowToSplitAnswer.JustMe,
  text: 'Just Me', 
  size: ButtonSize.Large, 
}

export const WithFriendsButton: ButtonConfig = {
  name: HowToSplitAnswer.WithFriends,
  text: 'With Friends', 
  size: ButtonSize.Large, 
} 

export const CancelButton: ButtonConfig = {
  name: HowToSplitAnswer.Cancel,
  text: 'Changed my mind',
  size: ButtonSize.Wide,
  color: 'lightblue',
  url: '/'
};