import React from 'react';
import './timezones.scss';
import classNames from 'classnames';

const zeroPad = (num: Number) => `${num}`.length < 2 ? `0${num}` : `${num}`;

const offsetFromUTC = new Date().getTimezoneOffset()/60;
const localTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

interface Hours {
  label?: string;
  start?: Number;
  end?: Number;
}

interface TimezonesProps { topHours: Hours, bottomHours: Hours };

const Timezones = ({topHours, bottomHours} : TimezonesProps) => {
  if (!topHours && !bottomHours) return null;
  const generateDay = () => {
    const hoursOfADay = [];
    for (let i = 1; i < 24; i++) hoursOfADay.push(i);
    hoursOfADay.push(0); // midnight
    return hoursOfADay;
  };
  const hourIsWithin = (time : Number, { start = 0, end = 0 }: Hours) => time >= start && time <= end;

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
        <span key={hour}>
          <div 
            className={classNames('hour', 
              { markedOnTop: hourIsWithin(hour + offsetFromUTC, topHours) }, 
              { markedAtBottom: hourIsWithin(hour + offsetFromUTC, bottomHours) }
            )} 
            key={hour}>
          </div>
          <div className="label">{zeroPad(hour)}</div>
        </span>
      ))}
    </div>
  </div>
  );
}
  


export default Timezones;