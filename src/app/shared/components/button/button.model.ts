export interface ButtonConfig {
  text: string
  size: ButtonSize
  url?: string
  color?: string
}

export enum ButtonSize {
  Small,
  Large
}