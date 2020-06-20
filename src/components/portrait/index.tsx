import React from 'react';
import './portrait.scss'

const Portrait = () => {

  return (
    <div className="portraitWrapper">
      <img 
        src='/rin-cv-portrait.png' 
        className='portrait' 
        alt="Portrait" 
      />
  </div>
  )
};

export default Portrait;