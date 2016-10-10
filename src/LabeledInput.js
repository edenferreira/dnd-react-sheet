import React from 'react';
import './LabeledInput.css';

const LabeledInput = ({
  label,
  defaultValue,
  onChange
}) => (
  <label className='labeled-input'>
    {label}
    <input defaultValue={defaultValue}
      className='labeled-input__input'
      onChange={e => onChange(e.target.value)}/>
  </label>
);

export default LabeledInput;