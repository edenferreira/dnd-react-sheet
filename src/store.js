import reducers from './reducers';
import {createStore} from 'redux';
import data from './data';


const store = createStore(reducers, {
  data,
  abilityScores: [
    {
      name: 'Str',
      value: 8,
      modifier: -1
    },
    {
      name: 'Dex',
      value: 8,
      modifier: -1
    },
    {
      name: 'Con',
      value: 8,
      modifier: -1
    },
    {
      name: 'Int',
      value: 8,
      modifier: -1
    },
    {
      name: 'Wis',
      value: 8,
      modifier: -1
    },
    {
      name: 'Cha',
      value: 8,
      modifier: -1
    }
  ]
});

export default store;