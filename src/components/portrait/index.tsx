import React from 'react';
import './portrait.scss'

const PORTRAIT_URL = "https://avatars1.githubusercontent.com/u/294558?s=460&u=5fb53f0e22df138553a9133baae7a25e6e918e35&v=4";

const Portrait = () => 
<div className='portraitWrapper'>
  <img src={PORTRAIT_URL} className='portrait' alt="Portrait" />
</div>

export default Portrait;