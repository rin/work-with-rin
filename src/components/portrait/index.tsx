import React, { useState } from 'react';
import ColorPicker from '../colorPicker';
import './portrait.scss'

const COLORS = ['#b6a1ce', '#a1cebc', '#90b2d6', '#c5c5c5'];

const Portrait = () => {
  const [background, setBackground] = useState();
  const [colorPickerDisplayed, setColorPicker] = useState(false);

  const showColorPicker = () => setColorPicker(true)
  const hideColorPicker = () => setColorPicker(false);

  const onColorSelected = ({ hex } : any) => {
    setBackground(hex);
    hideColorPicker();
  };

  return (
    <div className="portraitWrapper" style={{ background }} >
      {colorPickerDisplayed && (
        <ColorPicker
          colors={COLORS} 
          color={background || ''} 
          onColorSelected={onColorSelected} 
        />
      )}
      <button 
        className="colorPickerTrigger" 
        onClick={showColorPicker}
      >
        ✎ Change Color
      </button>
      <img 
        src='/rin-cv-portrait.png' 
        className='portrait' 
        alt="Portrait" 
      />
  </div>
  )
};

export default Portrait;