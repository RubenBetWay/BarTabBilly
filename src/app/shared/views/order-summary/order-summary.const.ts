import { ButtonConfig, ButtonSize } from '../../components/button/button.model';

export enum OrderSummaryButtonNames {
  View = 'view',
  Order = 'order',
  Close = 'close',
}

export const ClosedStateButtons: ButtonConfig[] = [
  {
    name: OrderSummaryButtonNames.View,
    text: 'View Detail',
    size: ButtonSize.XSmall,
    color: 'lightblue',
  },
  {
    name: OrderSummaryButtonNames.Order,
    text: 'Place Order',
    size: ButtonSize.XSmall,
    color: 'aquamarine',
  },
];

export const OpenStateButtons: ButtonConfig[] = [
  {
    name: OrderSummaryButtonNames.Close,
    text: 'Less detail',
    size: ButtonSize.XSmall,
    color: 'lightblue',
  },
  {
    name: OrderSummaryButtonNames.Order,
    text: 'Place Order',
    size: ButtonSize.XSmall,
    color: 'aquamarine',
  },
];
