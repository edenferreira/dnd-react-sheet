import {ADD_ABILITY, REMOVE_ABILITY} from './names';

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

export {
  changeName,
  changePlayerName,
  changeClass,
  changeRace,
  changeAlignment,
  addLevel,
  removeLevel,
} from './basic-information';