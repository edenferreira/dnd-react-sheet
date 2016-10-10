import React, {Component} from 'react';
import LabeledInput from './LabeledInput';
import LabeledDropdown from './LabeledDropdown';
import './BasicInformation.css';
import {map, get, find} from 'lodash/fp';

class BasicInformation extends Component {
  render() {
    return (
      <div className='basic-information'>
        <LabeledInput label={'Name'}
          defaultValue={this.props.name}
          onChange={this.props.onNameChange} />
        <LabeledInput label={'Player Name'}
          defaultValue={this.props.playerName}
          onChange={this.props.onPlayerNameChange} />
        <LabeledDropdown label={'Class'}
          selected={this.props.classChosen.name}
          options={[]}
          onChange={this.props.onClassChosenChange} />
        <LabeledDropdown label={'Race'}
          selected={this.props.race.name}
          options={map(get('name'), this.props.options.races)}
          onChange={race => this.props.onRaceChange(find(r => r.name === race, this.props.options.races))} />
        <LabeledDropdown label='Aligment'
          selected={this.props.aligment}
          options={this.props.options.aligments}
          onChange={this.props.onAligmentChange} />
      </div>
    );
  }
}

export default BasicInformation;