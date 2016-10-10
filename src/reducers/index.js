import abilityScores from './ability-scores';
import basicInformation from './basic-information';
import {combineReducers} from 'redux';
import data from '../data';

const options = () => data;

const app = combineReducers({
  options,
  abilityScores,
  basicInformation
});

export default app;