import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AbilityScores from './AbilityScores';
import store from './store';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AbilityScores />
        </div>
      </Provider>
    );
  }
}

export default App;
