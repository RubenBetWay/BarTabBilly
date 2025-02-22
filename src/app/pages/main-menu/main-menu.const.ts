import { ButtonConfig, ButtonSize } from "src/app/shared/components/button/button.model";

export const OpenButton: ButtonConfig = {
  name: 'open',
  text: 'Open Tab', 
  size: ButtonSize.Large, 
  url: 'open'  
}

export const OrderButton: ButtonConfig = {
  name: 'order',
  text: 'Order Round', 
  size: ButtonSize.Large, 
  url: 'order' 
}   

export const SettleButton: ButtonConfig = {
  name: 'settle',
  text: 'Settle Tab', 
  size: ButtonSize.Large, 
  url: 'settle'  
}
