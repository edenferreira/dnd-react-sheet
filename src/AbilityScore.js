import React from 'react';
import './AbilityScore.css';

const AbilityScore = ({
  name,
  value,
  modifier,
  onPlusClick,
  onMinusClick
}) => (
  <div className='ability-score row'>
    <label className='col-sm-4'>{name}</label>
    <span className='col-sm-2'>{value}</span>
    <span className='col-sm-2'>{modifier}</span>
    <span className='col-sm-4'>
      <button onClick={onPlusClick}
        className='btn btn-primary'>+</button>
      <button onClick={onMinusClick}
        className='btn btn-default'>-</button>
    </span>
  </div>
);

export default AbilityScore;