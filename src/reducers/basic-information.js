import {
  CHANGE_CHARACTER_NAME,
  CHANGE_PLAYER_NAME,
  CHANGE_CLASS,
  CHANGE_RACE,
  CHANGE_ALIGNMENT,
  ADD_LEVEL,
  REMOVE_LEVEL,
} from '../actions/names';

const basicInformation = (
  state = {
    name: '',
    playerName: '',
    classChosen: {},
    race: {},
    aligment: ''
  },
  action
) => {
  switch (action.type) {
    case CHANGE_CHARACTER_NAME:
      return {
        ...state,
        name: action.name
      };
    case CHANGE_PLAYER_NAME:
      return {
        ...state,
        playerName: action.playerName
      };
    case CHANGE_CLASS:
      return {
        ...state,
        classChose: action.classChose
      };
    case CHANGE_RACE:
      return {
        ...state,
        race: action.race
      };
    case CHANGE_ALIGNMENT:
      return {
        ...state,
        aligment: action.aligment
      };
    case ADD_LEVEL:
      return {
        ...state,
        level: ++state.level
      };
    case REMOVE_LEVEL:
      return {
        ...state,
        level: --state.level
      };
    default:
      return state;
  }
}

export default basicInformation;

/*
export const name = changeBasicInformation('name', CHANGE_CHARACTER_NAME, '');
export const playerName = changeBasicInformation('playerName', CHANGE_PLAYER_NAME, '');
export const classChosen = changeBasicInformation('classChosen', CHANGE_CLASS, {});
export const race = changeBasicInformation('race', CHANGE_RACE, {});
export const aligment = changeBasicInformation('aligment', CHANGE_ALIGNMENT, '');
export const level = (state = {level: 1}, action) => {
  switch (action.type) {
    case ADD_LEVEL:
      return {
        ...state,
        level: ++state.level
      };
    case REMOVE_LEVEL:
      return {
        ...state,
        level: --state.level
      };
    default:
      return state;
  }
};

const basicInformation = combineReducers({
  name,
  playerName,
  classChosen,
  race,
  aligment,
  level
});

export default basicInformation;*/