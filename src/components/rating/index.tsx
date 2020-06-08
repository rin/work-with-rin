import React from 'react';
import './rating.css';

interface RatingProps {
  percentage: number;
}

const Rating = ({percentage} : RatingProps) => 
  <div className="rating" title={`${percentage}%`}>
    <div className="progress" style={{width: `${percentage}%` }}></div>
  </div>

export default Rating;
