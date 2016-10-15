import React, {Component} from 'react';
import {map} from 'lodash/fp';
import './Dropdown.css';

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      listVisible: false
    };
  }
  handleClick() {
    this.setState({
      listVisible: !this.state.listVisible
    });
  }
  handleListClick(e, option) {
    e.preventDefault();
    this.props.onChange(option);
    this.setState({
      listVisible: false
    });
  }
  listClass() {
    return this.state.listVisible ?
      'dropdown__list show' :
      'dropdown__list hide';
  }
  render() {
    return (
      <div className='dropdown'>
        <span className='dropdown__selected'>{this.props.selected}</span>
        <button onClick={() => this.handleClick()} >*</button>
        <ul className={this.listClass()}>
          {map(option => (
            <li key={option}
              onClick={e => this.handleListClick(e, option)}>
              {option}
            </li>
          ), this.props.options)}
        </ul>
      </div>
    );
  }
};

export default Dropdown;