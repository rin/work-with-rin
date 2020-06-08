import React, { ReactNode } from 'react';
import './cardGrid.scss';

interface CardGridProps {
  children: ReactNode;
}

const CardGrid = ({children}: CardGridProps) => (
  <div className='cardGrid'>
    {children}
  </div>
);

export default CardGrid;