import {
  __,
  defaultTo,
  first,
  find,
  filter,
  matches,
  isEmpty,
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
  INITIAVE,
  SAVING_THROW,
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

const isProficient = (type, ability, feats) => flow(
  filter(matches({type})),
  map(get('payload')),
  filter(matches({ability, proficient: true})),
  first,
  get('proficient'),
  defaultTo(false)
)(feats)

const byTypeAbility = (type, ability) => ({type, payload: {ability}});

const sumFeatValue = (match) => flow(
  filter(matches(match)),
  map(get('payload.value')),
  map(defaultTo(0)),
  sum
);

//MAYBE: if necessary change the return from number to the skill
//with a value associated with
export const skill = (skill, abilities) => {
  if (!skill || !abilities) throw new Error('both the skill and the abilities are required');
  const {proficient, ability} = skill;
  const {modifier} = find(matches({name: ability}), abilities);
  return modifier + (proficient ? proficiencyBonus : 0);
}

export const savingThrow = (saving, abilities, feats = []) => {
  if (!saving || !abilities) {
    throw new Error('both the ability and the abilities are required')
  }
  const {ability: name} = saving;
  const {modifier} = find(matches({name}), abilities);
  const getTotalValueSum = sumFeatValue(byTypeAbility(SAVING_THROW, name));
  return modifier
    + getTotalValueSum(feats)
    + (
      isProficient(SAVING_THROW, name, feats)
      ? proficiencyBonus
      : 0);
};