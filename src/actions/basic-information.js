import {
  CHANGE_CHARACTER_NAME,
  CHANGE_PLAYER_NAME,
  CHANGE_CLASS,
  CHANGE_RACE,
  CHANGE_ALIGNMENT,
  ADD_LEVEL,
  REMOVE_LEVEL,
} from '../actions/names';

export const createActionBasicInformation = (field, actionType) => {
  return (value) => {
    return {
      type: actionType,
      [field]: value
    };
  };
};

export const changeName = createActionBasicInformation('name', CHANGE_CHARACTER_NAME);
export const changePlayerName = createActionBasicInformation('playerName', CHANGE_PLAYER_NAME);
export const changeClass = createActionBasicInformation('classChosen', CHANGE_CLASS);
export const changeRace = createActionBasicInformation('race', CHANGE_RACE);
export const changeAlignment = createActionBasicInformation('aligment', CHANGE_ALIGNMENT);

export const addLevel = () => {
  return {
    type: ADD_LEVEL
  };
};

export const removeLevel = () => {
  return {
    type: REMOVE_LEVEL
  };
};