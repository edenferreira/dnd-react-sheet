import {
  flow,
  __,
  subtract,
  divide,
  floor,
  map,
  find,
  matches,
  add,
} from 'lodash/fp';

export const modifier = flow(
  subtract(__, 10),
  divide(__, 2),
  floor);

export const abilityScores = (
  abilityScores,
  bonusAbilities = []
) => {
  return map(
    ability => {
      var bonusAbility = find(
        matches({name: ability.name}),
        bonusAbilities);

      return bonusAbility ?
        {
          ...ability,
          value: ability.value + bonusAbility.value
        } :
        ability;
    },
    abilityScores)
};

export const skills = (
  skillList,
  abilityScores
) => {
  return map(
    skill => {
      var {value} = find(
        matches({name: skill.ability}),
        abilityScores);

      return {
        ...skill,
        value: skill.value + modifier(value)
      };
    },
    skillList);
};

const changeAbilityWithFn = (name, abilities, fn) => {
  return map(
    ability => (
      ability.name === name ?
          {
            ...ability,
            value: fn(ability.value)
          } :
          ability),
    abilities)
};

export const incAbility = (name, abilities) => {
  return changeAbilityWithFn(name, abilities, add(1));
};

export const decAbility = (name, abilities) => {
  return changeAbilityWithFn(name, abilities, subtract(__, 1));
};