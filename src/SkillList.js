import React from 'react';
import {map} from 'lodash/fp';
import './SkillList.css';

const SkillList = ({
  skills
}) => (
  <ul className='skill-list'>
    {map(
      ({name, ability, value}) => (
        <li key={name}
          className='row'>
          <span className='col-sm-8'>{name}</span>
          <span className='col-sm-2'>{ability}</span>
          <span className='col-sm-2'>{value}</span>
        </li>
      ),
      skills
    )}
  </ul>
)

export default SkillList;