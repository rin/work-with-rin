import React from 'react';
import Rating from '../rating';
import { SkillInterface, SkillListInterface } from '../../types';


const SkillList = ({ skills } : SkillListInterface) => (
  <>
    {skills.map(({name, rating, marked}: SkillInterface) => (
      <span key={name}>
        {marked ? (
          <mark>{name}</mark>
        ):(
          <>{name}</>
        )}
        <Rating percentage={rating} />
      </span>
    ))}
  </>
)


export default SkillList;