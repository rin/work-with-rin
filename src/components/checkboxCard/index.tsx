import React, { useState, SyntheticEvent } from 'react';
import Checkbox from '../checkbox';
import Card from '../card';
import './checkboxCard.scss';

interface CheckboxCardProps {
  title: string,
  loading?: boolean;
}

const LGBT_ARTICLE = "https://www.theguardian.com/business/2019/apr/14/lgbt-friendly-business";
const WHOLE_SELF_ARTICLE = "https://www.forbes.com/sites/hennainam/2018/05/10/bring-your-whole-self-to-work/";

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
              100% remote
            </Checkbox>
          </li>
          <li>
            <Checkbox id="2" onChange={handleChecked}>
              LGBTQI*-friendly
                <a title="Tell me more about it" href={LGBT_ARTICLE}>[*]</a>
            </Checkbox>
          </li>
          <li>
            <Checkbox id="3" onChange={handleChecked}>
              "Bring your whole self to work" culture
                <a title="Tell me more about it" href={WHOLE_SELF_ARTICLE}>[*]</a>
            </Checkbox>
          </li>
        </ul>
        <div className="wishlist">
          {new Array(checkedCount).fill("⭐️").map((e) => <span>{e}</span>)}
          {checkedCount === 3 && ("Excellent.")}
        </div>
      </>
    </Card>
  );
}

export default CheckboxCard;