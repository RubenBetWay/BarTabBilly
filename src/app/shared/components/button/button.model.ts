export interface ButtonConfig {
  name: string;
  text: string;
  size: ButtonSize;
  url?: string;
  color?: string;
}

export enum ButtonSize {
  XSmall,
  Small,
  Large,
  Wide,
}

