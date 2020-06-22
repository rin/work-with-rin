import React from 'react';
import './rating.scss';

interface RatingProps {
  skill: number;
}

const Rating = ({skill} : RatingProps) => 
  <div className="rating" title={`${skill}/5`}>
    <div className="progress" style={{width: `${skill/5.0*100}%` }}></div>
  </div>

export default Rating;
