import React from 'react';
import './timezones.scss';
import classNames from 'classnames';


const HOURS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 0];

const zeroPad = (num: Number) => `${num}`.length < 2 ? `0${num}` : `${num}`;

const offsetFromUTC = new Date().getTimezoneOffset()/60;
const localTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

interface Hours {
  label: string;
  start: Number;
  end: Number;
}

interface TimezonesProps { hours: [Hours, Hours] };

const Timezones = ({hours: [topHours, bottomHours]} : TimezonesProps) => {
  const generateDay = () => {
    const hoursOfADay = [];
    for (let i = 1; i < 24; i++) hoursOfADay.push(i);
    hoursOfADay.push(0); // midnight
    return hoursOfADay;
  };
  const hourIsWithin = (time : Number, { start, end }: Hours) => time >= start && time <= end;

  return (
    <div className="timezones">
    <ul className="legend">
      <li>
        {`transposed to your local timezone (${localTimezoneName}) and open to negotiation`}
      </li>
      <li><span className="markedOnTop"></span>{topHours.label}</li>
      <li><span className="markedAtBottom"></span>{bottomHours.label}</li>
    </ul>
    <div>
      {generateDay().map((hour) => (
        <>
          <div 
            className={classNames('hour', 
              { markedOnTop: hourIsWithin(hour + offsetFromUTC, topHours) }, 
              { markedAtBottom: hourIsWithin(hour + offsetFromUTC, bottomHours) }
            )} 
            key={hour}>
          </div>
          <div className="label">{zeroPad(hour)}</div>
        </>
      ))}
    </div>
  </div>
  );
}
  


export default Timezones;