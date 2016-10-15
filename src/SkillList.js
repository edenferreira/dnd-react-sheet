import React from 'react';
import {map, includes, get} from 'lodash/fp';
import {Row, Col} from './Wrappers';
import './SkillList.css';

const disabled = (
  proficient,
  full,
  name,
  names
) => !proficient || (full && !includes(name, names));

const SkillList = ({
  skills,
  skillsChosen,
  full,
  onSkillChosen,
}) => {
  const names = map(get('name'), skillsChosen);
  return (
    <div>
      <h4>Skills</h4>
      <ul className='skill-list list-group'>
        {map(
          ({
            name,
            ability,
            value,
            proficient,
          }) => (
            <li key={name}
              className='list-group-item'>
              <Row>
                <Col sm='6'>{name}</Col>
                <Col sm='2'>
                  <input type='checkbox'
                    disabled={disabled(proficient, full, name, names)}
                    checked={includes(name, names)}
                    onClick={() => onSkillChosen(name)}/>
                </Col>
                <Col sm='2'>{ability}</Col>
                <Col sm='2'>{value}</Col>
              </Row>
            </li>
          ),
          skills
        )}
      </ul>
    </div>
  );
};

export default SkillList;