import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  onPress?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  containerStyles: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface SearchState {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}