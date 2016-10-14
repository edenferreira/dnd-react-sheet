import {
  __,
  flow,
  subtract,
  divide,
  floor,
  add
} from 'lodash/fp';
import {
  ADD_ABILITY,
  REMOVE_ABILITY
} from '../actions/names';
import {STR, DEX, CON, INT, WIS, CHA} from '../data/abilities';

const calcModifier = flow(subtract(__, 10), divide(__, 2), floor);

const calcNewState = (abilities, name, value, fn) => {
  return abilities.map(ability => {
    if (ability.name === name) {
      return {
        ...ability,
        value: fn(ability.value, value),
        modifier: calcModifier(fn(ability.value, value))
      }
    }
    return ability
  })
}

const abilityScores = (
  state = [
    {
      name: STR,
      value: 8,
      modifier: -1
    },
    {
      name: DEX,
      value: 8,
      modifier: -1
    },
    {
      name: CON,
      value: 8,
      modifier: -1
    },
    {
      name: INT,
      value: 8,
      modifier: -1
    },
    {
      name: WIS,
      value: 8,
      modifier: -1
    },
    {
      name: CHA,
      value: 8,
      modifier: -1
    }
  ],
  action
) => {
  const {type, name, value} = action;
  switch (type) {
    case ADD_ABILITY:
      return calcNewState(state, name, value, add);

    case REMOVE_ABILITY:
      return calcNewState(state, name, value, subtract)

    default:
      return state
  }
};

export default abilityScores;