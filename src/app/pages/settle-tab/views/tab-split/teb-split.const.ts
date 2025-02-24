import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';
import { SettleTabSummaryOption } from '../tab-summary/tab-summary.const';

export enum TabSplitActionButton {
  Proceed = 'proceed',
  Cancel = 'cancel',
}

export const TabSplitActionButtons: ButtonConfig[] = [
  {
    name: TabSplitActionButton.Cancel,
    text: 'Cancel',
    size: ButtonSize.Wide,
    color: 'lightblue',
  },
  {
    name: TabSplitActionButton.Proceed,
    text: `Look good`,
    size: ButtonSize.Wide,
    color: 'aquamarine',
  },
];
