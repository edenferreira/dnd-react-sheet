import React from 'react';
import AbilityScore from './AbilityScore';
import {map} from 'lodash/fp';
import './AbilityScores.css';
import {modifier} from './calculations';

const AbilityScores = ({
  onAddAbilityScore,
  onRemoveAbilityScore,
  abilityScores
}) => (
  <div>
    <ul className='ability-scores__list'>
      {map(
        ({name, value}) => (
          <li key={name}>
            <AbilityScore
              name={name}
              value={value}
              modifier={modifier(value)}
              onPlusClick={() => onAddAbilityScore(name, 1)}
              onMinusClick={() => onRemoveAbilityScore(name, 1)}>
            </AbilityScore>
          </li>
        ),
        abilityScores
      )}
    </ul>
  </div>
);

export default AbilityScores;