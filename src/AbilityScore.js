import React from 'react';
import './AbilityScore.css';

const AbilityScore = ({
  name,
  value,
  modifier,
  onPlusClick,
  onMinusClick
}) => (
  <div className='ability-score pure-g'>
    <label className='pure-u-sm-1-4'>{name}</label>
    <span className='pure-u-sm-1-4'>{value}</span>
    <span className='pure-u-sm-1-4'>{modifier}</span>
    <span className='pure-u-sm-1-4'>
      <button onClick={onPlusClick}>+</button>
      <button onClick={onMinusClick}>-</button>
    </span>
  </div>
);

export default AbilityScore;