import { ButtonConfig, ButtonSize } from "../../components/button/button.model";

export enum SelectTabUse {
  Order,
  Settle,
}

export const CancelButton: ButtonConfig = {
  name: 'cancel',
  text: 'Cancel',
  size: ButtonSize.Wide,
  color: 'aquamarine'
}