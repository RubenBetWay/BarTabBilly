import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model";

export enum ConfirmationButton {
  Proceed = 'proceed',
  Cancel = 'cancel',
  Home = 'home',
}

export const ConfirmationButtons: ButtonConfig[] = [
  {
    name: ConfirmationButton.Cancel,
    text: 'Whoops - Forgot something',
    size: ButtonSize.Wide,
    color: 'lightblue',
  },
  {
    name: ConfirmationButton.Proceed,
    text: 'Looks Good',
    size: ButtonSize.Wide,
    color: 'aquamarine',
  },
];

