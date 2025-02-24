import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model";

export enum SettleTabSummaryOption {
  Proceed = 'proceed',
  Cancel = 'cancel',
}

export const SettleTabSummaryButtons: ButtonConfig[] = [
  {
    name: SettleTabSummaryOption.Cancel,
    text: 'Not this tab',
    size: ButtonSize.Wide,
    color: 'lightblue',
  },
  {
    name: SettleTabSummaryOption.Proceed,
    text: `Let's start settling`,
    size: ButtonSize.Wide,
    color: 'aquamarine',
  },
];