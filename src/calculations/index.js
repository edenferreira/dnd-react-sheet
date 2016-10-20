import {
  __,
  find,
  filter,
  matches,
  includes,
  map,
  subtract,
  concat,
  divide,
  floor,
  flow,
  reduce,
  sum,
  get,
} from 'lodash/fp';
import {
  CON,
  DEX,
} from '../data/abilities';
import {
  HIT_DIE,
  AC,
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

const acAbilities = flow(
  concat({type: AC, payload: {ability: DEX}}),
  filter(matches({type: AC})),
  map(get('payload.ability'))
)

const allAcAbilities = feats => ({name}) => includes(
  name, acAbilities(feats))

export const ac = (bases, abilities = [], feats) => {
  return flow(
    filter(allAcAbilities(feats)),
    map(get('modifier')),
    concat(bases),
    sum
  )(abilities);
};