"use client"

import { CustomButtonProps } from './types'
import React from 'react'

function CustomButton(props: CustomButtonProps) {
  const {title, onPress, disabled, containerStyles} = props
  return (
    <button
      disabled={disabled}
      type='button'
      className={`custom-btn ${containerStyles}`}
      onClick={onPress}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton