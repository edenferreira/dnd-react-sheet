import React from 'react';
import AbilityScore from './AbilityScore';
import {flow, add, divide, map, partial} from 'lodash/fp';

const calcModifier = flow(add(10), divide(2), Math.floor);

const AbilityScores = ({
  onAddAbilityScore,
  onRemoveAbilityScore,
  abilityScores
}) => (
  <div>
    <ul>
      {map(
        ({name, value}) => (
          <li key={name}>
            <AbilityScore
              name={name}
              value={value}
              modifier={calcModifier(value)}
              onPlusClick={partial(onAddAbilityScore, name, 1)} 
              onMinusClick={partial(onRemoveAbilityScore, name, 1)}>
            </AbilityScore>
          </li>
        ),
        abilityScores
      )}            
    </ul>
  </div>
);

export default AbilityScores;