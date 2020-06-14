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
            <Checkbox id="1" onChange={handleChecked}><span>100% remote</span></Checkbox>
          </li>
          <li>
            <Checkbox id="2" onChange={handleChecked}><span>LGBTQI*-friendly<a title="Tell me more about it" href="https://www.theguardian.com/business/2019/apr/14/lgbt-friendly-business">[*]</a></span></Checkbox>
          </li>
          <li>
            <Checkbox id="2" onChange={handleChecked}><span>"Bring your whole self to work" culture<a title="Tell me more about it" href="https://www.forbes.com/sites/hennainam/2018/05/10/bring-your-whole-self-to-work/">[*]</a></span></Checkbox>
          </li>
        </ul>
        {checkedCount === 1 && ("That's nice.")}
        {checkedCount === 2 && ("That doesn't sound too bad.")}
        {checkedCount === 3 && ("Excellent.")}
      </>
    </Card>
  );
}

export default CheckboxCard;