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
  <div className='col-sm-12 ability-scores'>
    <h4>Ability Scores</h4>
    <ul className='list-group'>
      {map(
        ({name, value}) => (
          <li key={name} className='list-group-item'>
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