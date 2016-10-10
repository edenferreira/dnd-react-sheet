import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
};

const store = createStore(reducers, applyMiddleware(logger));

export default store;