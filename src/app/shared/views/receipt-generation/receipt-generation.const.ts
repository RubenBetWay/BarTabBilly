import {
  ButtonConfig,
  ButtonSize,
} from 'src/app/shared/components/button/button.model';

export enum ReceiptTypeSelection {
  CSV = 'csv',
  PDF = 'pdf',
}

export const ReceiptTypeButtons: ButtonConfig[] = [
  {
    name: ReceiptTypeSelection.CSV,
    text: `CSV`,
    size: ButtonSize.Large,
  },
  {
    name: ReceiptTypeSelection.PDF,
    text: `PDF`,
    size: ButtonSize.Large,
  },
];