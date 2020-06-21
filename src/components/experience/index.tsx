import React from 'react';
import moment from 'moment';
import LoadingSpinner from '../loadingSpinner';
import Collapsible from 'react-collapsible';
import './experience.scss';

interface ExperienceItem {
  start: string;
  end: string;
  title: string;
  organisation: string;
  link: string;
  description: string;
}

interface ExperienceProps {
  items: Array<ExperienceItem> ;
}

const DATE_FORMAT = "DD.MM.YYYY";

const formatDateAsMonthYear = (dateString: string = "") => 
  moment(dateString, DATE_FORMAT).format("MM.YYYY");

const Experience = ({ items }: ExperienceProps) => {
  if (items.length === 0 ) return (<LoadingSpinner />);
  return (
    <ul className="experience">
      {items.map((experience: ExperienceItem) => (
        <li>
          <span className="experienceDate">
            {formatDateAsMonthYear(experience.start)} - {formatDateAsMonthYear(experience.end)}
          </span>
          <span className="experienceOrg">
            <a href={experience.link}>{experience.organisation}</a>
          </span>
          <Collapsible trigger={
            <h3 className="experienceTitle">{experience.title}</h3>
          }>{experience.description}</Collapsible>
        </li>
      ))}
    </ul>
  )};
 
export default Experience;