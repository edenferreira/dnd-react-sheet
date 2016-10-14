import React, {Component} from 'react';
import LabeledInput from './LabeledInput';
import LabeledDropdown from './LabeledDropdown';
import './BasicInformation.css';

class BasicInformation extends Component {
  render() {
    return (
      <div className='basic-information pure-g'>
        <span className="pure-u-sm-1-4">
          <LabeledInput label={'Name'}
            defaultValue={this.props.name}
            onChange={this.props.onNameChange} />
        </span>
        <span className="pure-u-sm-1-4">
          <LabeledInput label={'Player Name'}
            defaultValue={this.props.playerName}
            onChange={this.props.onPlayerNameChange} />
        </span>
        <span className="pure-u-sm-1-4">
          <LabeledDropdown label={'Class'}
            selected={this.props.classChosen.name}
            options={[]}
            onChange={this.props.onClassChosenChange} />
        </span>
        <span className="pure-u-sm-1-4">
          <LabeledDropdown label={'Race'}
            selected={this.props.race}
            options={this.props.races}
            onChange={this.props.onRaceChange} />
        </span>
        <span className="pure-u-sm-1-4">
          <LabeledDropdown label='Aligment'
            selected={this.props.aligment}
            options={this.props.aligments}
            onChange={this.props.onAligmentChange} />
        </span>
      </div>
    );
  }
}

export default BasicInformation;