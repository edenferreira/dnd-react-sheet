const ADD_ABILITY = 'ADD_ABILITY';
const REMOVE_ABILITY = 'REMOVE_ABILITY';
const CHANGE_NAME = 'CHANGE_NAME';

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