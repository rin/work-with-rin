import React from 'react';
import Rating from '../rating';
// import './loadingSpinner.scss';

interface Skill {
  name: string;
  rating: number;
  marked: Boolean;
}

interface SkillList {
  skills: Array<Skill>
}

const SkillList = ({ skills } : SkillList) => (
  <>
    {skills.map(({name, rating, marked}: Skill) => (
      <span>
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