import React from 'react';
import { TwitterPicker, ColorChangeHandler } from 'react-color';
import './colorPicker.scss';

interface ColorPickerProps {
  color: string;
  colors: Array<string>;
  onColorSelected: ColorChangeHandler;
}

const ColorPicker = ({ colors, color, onColorSelected }: ColorPickerProps) => 
  <div className='colorPickerWrapper'>
    <TwitterPicker
      color={color}
      colors={colors}
      onChangeComplete={onColorSelected}
    />
  </div>

export default ColorPicker;