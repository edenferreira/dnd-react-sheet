import React from 'react';
import AbilityScore from './AbilityScore';
import {map} from 'lodash/fp';
import './AbilityScores.css';
import {
  __,
  flow,
  subtract,
  divide,
  floor
} from 'lodash/fp';

const calcModifier = flow(subtract(__, 10), divide(__, 2), floor);

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
              modifier={calcModifier(value)}
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