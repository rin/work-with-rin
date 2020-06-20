import React from 'react';
import './timezones.scss';
import classNames from 'classnames';

const HOURS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 0];
const NOV_TO_MAY_HOURS_UTC = [1,2,3,4,5,6,7,8,9,10];
const APR_TO_OCT_HOURS_UTC = [6,7,8,9,10,11,12, 13,14,15];

// interface TimezonesInterface {
//   offsetFromUTC?: number;
// }

const zeroPad = (num: Number) => `${num}`.length < 2 ? `0${num}` : `${num}`;

const offsetFromUTC = new Date().getTimezoneOffset()/60;
const localTimezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

const Timezones = () => (
  <div className="timezones">
    <ul className="legend">
      <li>
        {`transposed to your local timezone (${localTimezoneName}) and open to negotiation`}
      </li>
      <li><span className="markedOnTop"></span>November to May</li>
      <li><span className="markedAtBottom"></span>April to October</li>
    </ul>
    <div>
      {HOURS.map((time) => (
        <>
          <div 
            className={classNames('hour', 
              { markedOnTop: NOV_TO_MAY_HOURS_UTC.includes(time + offsetFromUTC)}, 
              { markedAtBottom: APR_TO_OCT_HOURS_UTC.includes(time + offsetFromUTC)}
            )} 
            key={time}>
          </div>
          <div className="label">{zeroPad(time)}</div>
        </>
      ))}
    </div>
  </div>
)


export default Timezones;