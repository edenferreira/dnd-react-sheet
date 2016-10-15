import React from 'react';
import {map} from 'lodash/fp';
import {Row, Col} from './Wrappers';
import './SavingThrows.css';

const SavingThrows = ({
  savingThrows
}) => (
  <div>
    <h4>Saving Throws</h4>
    <ul className='saving-throws list-group'>
      {map(
        ({name, modifier, proficient}) => (
          <li key={name} className='list-group-item'>
            <Row>
              <Col sm='2'>
                <input type='checkbox' disabled checked={proficient}/>
              </Col>
              <Col sm='3'>{modifier}</Col>
              <Col sm='7'>{name}</Col>
            </Row>
          </li>
        ),
        savingThrows
      )}
    </ul>
  </div>
);

export default SavingThrows;