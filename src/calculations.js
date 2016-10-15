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
  get,
  includes,
  reject,
  concat,
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

export const proficient = (
  {
    name,
  },
  proficiencies = []
) => {
  return !!find(matches({name}), proficiencies);
};

export const skills = (
  skillList,
  abilityScores,
  proficiencies = {}
) => {
  return map(
    skill => {
      var {value} = find(
        matches({name: skill.ability}),
        abilityScores);

      return {
        ...skill,
        value: skill.value + modifier(value),
        proficient: proficient(skill, proficiencies.choices)
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

export const changeSkillsChosen = (
  skillsChosen,
  skills,
  skillName
) => {
  const skill = find(matches({name: skillName}), skills);
  const names = map(get('name'), skillsChosen);

  return includes(skillName, names) ?
    reject(matches({name: skillName}), skillsChosen) :
    concat(skillsChosen, skill);
};

export const savingThrows = (
  abilities,
  proficiencies = {}
) => {
  return map(
    ({
      name,
      value
    }) => {
      const proficient = includes(
        name,
        proficiencies.savingThrows);

      return {
        name,
        modifier: modifier(value) + (proficient ? 2 : 0),
        proficient
      };
    }, abilities);
};

export const calcAC = (
  abilities,
  baseAC
) => {
  const {value} = find(matches({name: 'DEX'}), abilities);
  return baseAC + modifier(value);
};

export const getModifier = (
  name,
  abilities
) => {
  const {value} = find(matches({name}), abilities);
  return modifier(value);
}