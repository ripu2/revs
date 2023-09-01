import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  onPress?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  containerStyles: string;
}