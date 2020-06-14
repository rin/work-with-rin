import React, { ReactNode, Children } from 'react';
import LoadingSpinner from '../loadingSpinner';
import './card.scss';

interface CardProps {
  title: string,
  children: ReactNode;
  loading?: boolean;
}

const Card = ({title, children, loading = false}: CardProps) => (
    <div className={`card list`}>
      <h2 className='cardTitle'>{title}</h2>
      {loading ? (<LoadingSpinner />): (
        <ul>
          {Children.toArray(children).map((element, index) => (
            <li key={index}>
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

export default Card;