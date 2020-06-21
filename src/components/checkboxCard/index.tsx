import React, { useState, SyntheticEvent } from 'react';
import Checkbox from '../checkbox';
import Card from '../card';
import './checkboxCard.scss';

interface CheckboxCardProps {
  title: string,
  loading?: boolean;
}

const CheckboxCard = ({title, loading = false}: CheckboxCardProps) => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleChecked = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    target.checked ? setCheckedCount(checkedCount + 1) : setCheckedCount(checkedCount - 1)
  }

  return (
    <Card title={title} loading={loading}>
      <>
        <ul className="checkboxes">
          <li>
            <Checkbox id="1" onChange={handleChecked}>
              <span>
                100% remote
              </span>
            </Checkbox>
          </li>
          <li>
            <Checkbox id="2" onChange={handleChecked}>
              <span>
                LGBTQI*-friendly
              </span>
            </Checkbox>
          </li>
          <li>
            <Checkbox id="3" onChange={handleChecked}>
              <span>
                w/ social impact
              </span>
            </Checkbox>
          </li>
        </ul>
        <div className="stars">
          {new Array(checkedCount).fill("☆").map((e) => 
            <span className="star">{e}</span>)
          }
        </div>
      </>
    </Card>
  );
}

export default CheckboxCard;