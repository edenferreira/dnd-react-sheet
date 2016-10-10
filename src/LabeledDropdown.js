import React from 'react';
import Dropdown from './Dropdown';

const LabeledDropdown = ({
  label,
  selected,
  options,
  onChange
}) => (
  <label className='labeled-input'>
    {label}
    <Dropdown selected={selected}
      options={options}
      onChange={e => onChange(e)} />
  </label>
);

export default LabeledDropdown;