import React, { ReactNode } from 'react';
import LoadingSpinner from '../loadingSpinner';
import './card.scss';

interface CardProps {
  title: string;
  children: ReactNode;
  loading?: boolean;
  fill?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Card = ({title, children, loading = false, fill = false, fullWidth = false, className = ''}: CardProps) => (
    <div className={`card ${fill ? 'fill' : ''}${fullWidth ? 'fullWidth' : ''}${className}`}>
      <h2 className='cardTitle'>{title}</h2>
      {loading ? (<LoadingSpinner />): (children)}
    </div>
  );

export default Card;