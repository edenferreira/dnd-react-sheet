import React, {Component} from 'react';
import LabeledInput from './LabeledInput';
import LabeledDropdown from './LabeledDropdown';
import './BasicInformation.css';

class BasicInformation extends Component {
  render() {
    return (
      <div className='basic-information row'>
        <span className="col-sm-3">
          <LabeledInput label={'Name'}
            defaultValue={this.props.name}
            onChange={this.props.onNameChange} />
        </span>
        <span className="col-sm-3">
          <LabeledInput label={'Player Name'}
            defaultValue={this.props.playerName}
            onChange={this.props.onPlayerNameChange} />
        </span>
        <span className="col-sm-3">
          <LabeledDropdown label={'Class'}
            selected={this.props.classChosen}
            options={this.props.classes}
            onChange={this.props.onClassChosenChange} />
        </span>
        <span className="col-sm-3">
          <LabeledInput label={'Level'}
            defaultValue={this.props.level} />
        </span>
        <span className="col-sm-3">
          <LabeledDropdown label={'Race'}
            selected={this.props.race}
            options={this.props.races}
            onChange={this.props.onRaceChange} />
        </span>
        <span className="col-sm-3">
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