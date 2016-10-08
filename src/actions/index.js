const ADD_ABILITY = 'ADD_ABILITY';
const REMOVE_ABILITY = 'REMOVE_ABILITY';
const CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME';
const CHANGE_PLAYER_NAME = 'CHANGE_PLAYER_NAME';
const CHANGE_ALIGNMENT = 'CHANGE_ALIGNMENT';
const CHANGE_RACE = 'CHANGE_RACE';
const CHANGE_CLASS = 'CHANGE_CLASS';
const CHANGE_LEVEL = 'CHANGE_LEVEL';

export const addAbilityScore = (name, amount) => {
  return {
    type: ADD_ABILITY,
    name,
    amount
  };
};

export const removeAbilityScore = (name, amount) => {
  return {
    type: REMOVE_ABILITY,
    name,
    amount
  };
};