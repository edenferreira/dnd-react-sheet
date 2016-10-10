import AbilityScores from './AbilityScores';
import {connect} from 'react-redux';
import {addAbilityScore, removeAbilityScore} from './actions';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAbilityScore(name, amount) {
      dispatch(addAbilityScore(name, amount));
    },
    onRemoveAbilityScore(name, amount) {
      dispatch(removeAbilityScore(name, amount));
    }
  }
}

const ConnectedAbilityScores = connect(
	mapStateToProps,
	mapDispatchToProps
)(AbilityScores);

export default ConnectedAbilityScores;