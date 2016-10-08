import React from 'react';

const AbilityScore = ({
  name,
  value,
  modifier,
  onPlusClick,
  onMinusClick
}) => {
  const style = {
    color: 'white',
    margin: '4px'
  };

  return (
    <div>
      <label style={style}>{name}</label>
      <span style={style}>{value}</span>
      <span style={style}>{modifier}</span>
      <button onClick={onPlusClick}>+</button>
      <button onClick={onMinusClick}>-</button>
    </div>
  );
}

export default AbilityScore;