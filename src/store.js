import reducers from './reducers';
import {createStore} from 'react';

const store = createStore(reducers, {
  abilityScores: [
    {
      name: 'Str',
      value: 8
    },
    {
      name: 'Dex',
      value: 8
    },
    {
      name: 'Con',
      value: 8
    },
    {
      name: 'Int',
      value: 8
    },
    {
      name: 'Wis',
      value: 8
    },
    {
      name: 'Cha',
      value: 8
    }
  ]
});

export default store;