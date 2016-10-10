import React from 'react';
import BasicInformation from './BasicInformation';
import {connect} from 'react-redux';
import {
  changeName,
  changePlayerName,
  changeClass,
  changeRace,
  changeAlignment,
  addLevel,
  removeLevel,
} from './actions';
import {mapValues, values} from 'lodash/fp';

const mapStateToProps = ({
  basicInformation,
  options
}) => {
  return {
    ...basicInformation,
    options: mapValues(values, options)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange(name) {
      dispatch(changeName(name));
    },
    onPlayerNameChange(playerName) {
      dispatch(changePlayerName(playerName));
    },
    onClassChosenChange(classChosen) {
      dispatch(changeClass(classChosen));
    },
    onRaceChange(race) {
      dispatch(changeRace(race));
    },
    onAligmentChange(aligment) {
      dispatch(changeAlignment(aligment));
    },
  };
};

const ConnectedBasicInformation = connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicInformation);

export default ConnectedBasicInformation;