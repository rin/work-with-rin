import React from 'react';
import Rating from '../rating';
import { SkillInterface, SkillListInterface } from '../../types';
import './skillList.scss';

const SkillList = ({ skills } : SkillListInterface) => (
  <ul>
    {skills.map(({name, rating, marked}: SkillInterface) => (
      <li className="skill" key={name}>
        {marked ? (
          <mark>{name}</mark>
        ):(
          <>{name}</>
        )}
        <Rating percentage={rating} />
      </li>
    ))}
  </ul>
)


export default SkillList;