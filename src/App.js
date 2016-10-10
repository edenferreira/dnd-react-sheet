import React, {Component} from 'react';
import ConnectedAbilityScores from './ConnectedAbilityScores';
import ConnectedBasicInformation from './ConnectedBasicInformation';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedBasicInformation />
        <ConnectedAbilityScores />
      </div>
    );
  }
}

export default App;
