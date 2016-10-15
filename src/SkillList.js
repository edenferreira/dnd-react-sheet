import React from 'react';
import {map} from 'lodash/fp';

const SkillList = ({
  skills
}) => (
  <ul>
    {map(
      ({name, ability, value}) => (
        <li key={name}
          className='pure-g'>
          <span className='pure-u-sm-1-3'>{name}</span>
          <span className='pure-u-sm-1-3'>{ability}</span>
          <span className='pure-u-sm-1-3'>{value}</span>
        </li>
      ),
      skills
    )}
  </ul>
)

export default SkillList;