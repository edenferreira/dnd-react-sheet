import {
  __,
  find,
  filter,
  matches,
  isEmpty,
  last,
  includes,
  tail,
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
  INITIAVE,
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
export const maximumHealth = (abilities = [], feats) => {
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
  //includes the DEX ability by default
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

export const initiative = (abilities = [], feats = []) => {
  if (isEmpty(abilities)) return 0;
  const {modifier} = find(matches({name: DEX}), abilities);
  const fromFeat = flow(
    filter(matches({type: INITIAVE})),
    map(get('payload.value')),
    sum
  )(feats);

  return modifier + fromFeat;
}

const proficiencyBonus = 3;

//MAYBE: if necessary change the return from number to the skill
//with a value associated with
export const skill = (skill, abilities) => {
  if (!skill || !abilities) throw new Error('both the skill and the abilities are required');
  const {proficient, ability} = skill;
  const {modifier} = find(matches({name: ability}), abilities);
  return modifier + (proficient ? proficiencyBonus : 0);
}