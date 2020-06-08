import React, { SyntheticEvent, ReactNode } from 'react';
import './checkbox.scss';

interface CheckboxProps {
  id: string,
  onChange: (e: SyntheticEvent<Element, Event>) => void;
  children: ReactNode;
}

const Checkbox = ({id, onChange, children}: CheckboxProps) => (
  <>
    <input type="checkbox" className="checkbox" id={id} onChange={onChange} />
    <label htmlFor={id}>{children}</label>
  </>
  );

export default Checkbox;