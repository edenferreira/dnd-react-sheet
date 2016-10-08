import React from 'react';
import './LabeledInput.css';

const LabeledInput = ({
  label,
  onChange
}) => (
  <label className='labeled-input'>
    {label}
    <input className='labeled-input__input'
      onChange={e => onChange(e.target.value)}/>
  </label>
);

export default LabeledInput;