import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';

export enum AddDescriptionsActions {
  Done = 'done',
  Cancel = 'cancel',
}

export const DoneButton: ButtonConfig = {
  name: AddDescriptionsActions.Done,
  text: 'Done',
  size: ButtonSize.Wide,
  color: 'aquamarine',
};

export const CancelButton: ButtonConfig = {
  name: AddDescriptionsActions.Cancel,
  text: 'Changed my mind',
  size: ButtonSize.Wide,
  color: 'lightblue',
};
