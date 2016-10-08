import React, {Component} from 'react';
import {map} from 'lodash/fp';

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
  handleListClick(option) {
    this.props.onChange(option);
    this.setState({
      listVisible: false
    })
  }
  listClass() {
    return this.state.listVisible ?
      'dropdown__list show' :
      'dropdown__list hide';
  }
  render() {
    return (
      <div className='dropdown'>
        <input value={this.props.selected} readOnly />
        <button onClick={() => this.handleClick()} >\/</button>
        <ul className={this.listClass()}>
          {map(option => (
            <li key={option}
              onClick={() => this.handleListClick(option)}>
              {option}
            </li>
          ),
          this.props.options)}
        </ul>
      </div>
    );
  }
};

export default Dropdown;