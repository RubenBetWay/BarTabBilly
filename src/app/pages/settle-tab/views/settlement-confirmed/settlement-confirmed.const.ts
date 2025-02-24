import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';

export enum TabSettleConfirmationActionButton {
  Accept = 'accept',
  Reject = 'reject',
}

export const TabSettleConfirmationButtons: ButtonConfig[] = [
  {
    name: TabSettleConfirmationActionButton.Accept,
    text: `Yes please`,
    size: ButtonSize.Wide,
    color: 'lightblue',
  },
  {
    name: TabSettleConfirmationActionButton.Reject,
    text: `No - I'm good`,
    size: ButtonSize.Wide,
    color: 'aquamarine',

  },
];