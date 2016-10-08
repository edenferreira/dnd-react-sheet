const abilityScore = (state = {}, action) => {
  const { value = 0 }  = state;
  switch (action.type) {
    case 'ADD_ABILITY':
      return {
        ...state,
        value: value + action.amount
      }
    case 'REMOVE_ABILITY':
      return {
        ...state,
        value: value - action.amount
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