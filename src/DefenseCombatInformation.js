import React from 'react';
import {Row, Col} from './Wrappers';

const DefenseCombatInformation = ({
  initiative,
  ac,
  speed,
  hitPoints,
  maximum,
}) => (
  <Row>
    <Col sm='4'>
      <h4>AC</h4>
      <span>{ac}</span>
    </Col>
    <Col sm='4'>
      <h4>Initiative</h4>
      <span>{initiative}</span>
    </Col>
    <Col sm='4'>
      <h4>Speed</h4>
      <span>{speed}</span>
    </Col>
    <Col sm='5'>
      <h4>Hit Points</h4>
      <span>{hitPoints}</span>
    </Col>
    <Col sm='5'>
      <h4>Maximum</h4>
      <span>{maximum}</span>
    </Col>
  </Row>
);

export default DefenseCombatInformation;