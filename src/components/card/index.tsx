import React, { ReactNode, Children, useState, SyntheticEvent } from 'react';
import Checkbox from '../checkbox';
import './card.scss';

interface CardProps {
  title: string,
  children: ReactNode;
  type?: string;
}

const Card = ({title, children, type = 'list'}: CardProps) => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChecked = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    target.checked ? setCheckedCount(checkedCount + 1) : setCheckedCount(checkedCount - 1)
  }

  return (
    <div className={`card ${type}`}>
      <h2 className='cardTitle'>{title}</h2>
      <ul>
        {Children.toArray(children).map((element, index) => (
          <li>
            {type === 'list' && element}
            {type === 'checkboxes' && (
              <Checkbox id={`checkbox-${index}`} onChange={handleChecked}>{element}</Checkbox>
            )}
          </li>
        ))}
      </ul>
      {checkedCount === 1 && ("That's nice.")}
      {checkedCount === 2 && ("That doesn't sound too bad.")}
      {checkedCount === 3 && ("Excellent.")}
    </div>
  );
}

export default Card;