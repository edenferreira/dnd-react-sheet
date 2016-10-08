import React from 'react';
import './AbilityScore.css';

const AbilityScore = ({
  name,
  value,
  modifier,
  onPlusClick,
  onMinusClick
}) => (
  <div className='ability-score'>
    <label>{name}</label>
    <span>{value}</span>
    <span>{modifier}</span>
    <button onClick={onPlusClick}>+</button>
    <button onClick={onMinusClick}>-</button>
  </div>
);

export default AbilityScore;