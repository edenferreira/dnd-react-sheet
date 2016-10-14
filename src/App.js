import React, {Component} from 'react';
import AbilityScores from './AbilityScores';
import BasicInformation from './BasicInformation';
import {STR, DEX, CON, INT, WIS, CHA} from './data/abilities';
import {DWARF, HUMAN, ELF, HALFLING} from './data/races';
import {
  LAWFUL_GOOD,
  LAWFUL_EVIL,
  LAWFUL_NEUTRAL,
  NEUTRAL_GOOD,
  NEUTRAL_NEUTRAL,
  NEUTRAL_EVIL,
  CHAOTIC_GOOD,
  CHAOTIC_NEUTRAL,
  CHAOTIC_EVIL
} from './data/aligments';

import {map, get, find, matches} from 'lodash/fp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    const value = 8;
    this.state = {
      abilityScores: map(
        name => ({name, value}), [STR, DEX, CON, INT, WIS, CHA]),
      races: [DWARF, HUMAN, ELF, HALFLING],
      race: {name: ''},
      aligment: '',
      aligments: [
        LAWFUL_GOOD,
        LAWFUL_EVIL,
        LAWFUL_NEUTRAL,
        NEUTRAL_GOOD,
        NEUTRAL_NEUTRAL,
        NEUTRAL_EVIL,
        CHAOTIC_GOOD,
        CHAOTIC_NEUTRAL,
        CHAOTIC_EVIL
      ],
      name: '',
      playerName: ''
    };
  }
  raceNames = () => map(get('name'), this.state.races)
  abilityScores = () => {
    if (!this.state.race.abilities) return this.state.abilityScores;

    return map(
      ability => {
        var raceAbility = find(
          matches({name: ability.name}),
          this.state.race.abilities);
        console.log(raceAbility)
        if (!raceAbility) return ability;

        return {
          ...ability,
          value: ability.value + raceAbility.value
        };
      },
      this.state.abilityScores)
  }
  handleAddAbilityScore = (name) => {
    this.setState({
      abilityScores: map(ability => {
        if (ability.name === name) {
          return {
            ...ability,
            value: ability.value + 1
          };
        }
        return ability;
      }, this.state.abilityScores)
    });
  }
  handleRemoveAbilityScore = (name) => {
    this.setState({
      abilityScores: map(ability => {
        if (ability.name === name) {
          return {
            ...ability,
            value: ability.value - 1
          };
        }
        return ability;
      }, this.state.abilityScores)
    });
  }
  handleNameChange = (name) => {
    this.setState({
      name
    });
  }
  handlePlayerNameChange = (playerName) => {
    this.setState({
      playerName
    });
  }
  handleRaceChange = (raceName) => {
    this.setState({
      race: find(({name}) => name === raceName, this.state.races)
    });
  }
  handleAligmentChange = (aligment) => {
    this.setState({
      aligment
    });
  }
  render() {
    return (
      <div className='App pure-g'>
        <span className='pure-u-sm-1-1'>
          <BasicInformation classChosen={{}}
            race={this.state.race.name}
            races={this.raceNames()}
            aligment={this.state.aligment}
            aligments={this.state.aligments}
            onNameChange={this.handleNameChange}
            onPlayerNameChange={this.handlePlayerNameChange}
            onRaceChange={this.handleRaceChange}
            onAligmentChange={this.handleAligmentChange}
            />
        </span>
        <span className='pure-u-sm-1-4'>
          <AbilityScores abilityScores={this.abilityScores()}
            onAddAbilityScore={this.handleAddAbilityScore}
            onRemoveAbilityScore={this.handleRemoveAbilityScore} />
        </span>
      </div>
    );
  }
}

export default App;
