import {
  __,
  find,
  filter,
  matches,
  map,
  subtract,
  divide,
  floor,
  flow,
  reduce,
} from 'lodash/fp';
import {
  CON,
} from '../data/abilities';
import {
  HIT_DIE,
} from '../feature-types';

const calcModifier = flow(subtract(__, 10), divide(__, 2), floor);
const calcModifierFromAbility = ability => ({
  ...ability,
  modifier: calcModifier(ability.value),
})

export const modifiers = map(calcModifierFromAbility)

//Only count one CON modifier
//maybe in the future count two?
//I think will not be necessary
export const health = (abilities = [], feats) => {
  const {modifier = 0} = find(matches({name: CON}), abilities) || {};
  const value = flow(
    filter(matches({type: HIT_DIE})),
    reduce(
      (acc, {payload: {value}}) => acc + value,
      0)
    )(feats);
  return value + modifier
}
