import {__, flow, subtract, divide, floor} from 'lodash/fp';

const calcModifier = flow(subtract(__, 10), divide(__, 2), floor);

const abilityScore = (state = {}, action) => {
  let value, modifier;
  switch (action.type) {
    case 'ADD_ABILITY':
      value = state.value + action.amount;
      modifier = calcModifier(value);
      return {
        ...state,
        value,
        modifier
      }
    case 'REMOVE_ABILITY':
      value = state.value - action.amount;
      modifier = calcModifier(value);
      return {
        ...state,
        value,
        modifier
      }
    default:
      return state
  }
}

const abilityScores = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ABILITY':
    case 'REMOVE_ABILITY':
      return state.map(score => {
        if (score.name === action.name) {
          return abilityScore(score, action);
        }
        return score;
      });
    default:
      return state
  }
}

export default abilityScores;