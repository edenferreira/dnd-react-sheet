import React, {
  Component
}
from 'react';
import {Row, Col, ContainerFluid} from './Wrappers';
import AbilityScores from './AbilityScores';
import BasicInformation from './BasicInformation';
import SkillList from './SkillList';
import SavingThrows from './SavingThrows';
import DefenseCombatInformation from './DefenseCombatInformation';
import {
  getInitialState
}
from './data';
import {
  map,
  get,
  find,
  matches,
}
from 'lodash/fp';
import {
  abilityScores,
  skills,
  incAbility,
  decAbility,
  changeSkillsChosen,
  savingThrows,
  calcAC,
  getModifier,
}
from './calculations';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...getInitialState(),
      race: {
        name: ''
      },
      classChosen: {
        name: ''
      },
      skillsChosen: [],
      aligment: '',
      name: '',
      playerName: ''
    };
  }
  name = map(get('name'))
  get abilityScores() {
    return abilityScores(
      this.state.abilities,
      this.state.race.abilities);
  }
  get skills() {
    return skills(
      this.state.skills,
      this.abilityScores,
      (this.state.classChosen.proficiencies || {}).skills
    );
  }
  get savingThrows() {
    return savingThrows(
      this.abilityScores,
      this.state.classChosen.proficiencies);
  }
  get maximumHitPoinst() {
    return (this.state.classChosen.hitDie || 0) + getModifier('CON', this.abilityScores);
  }
  get level() {
    return 1;
  }
  handleAddAbilityScore = (name) => {
    this.setState({
      abilities: incAbility(name, this.state.abilities)
    });
  }
  handleRemoveAbilityScore = (name) => {
    this.setState({
      abilities: decAbility(name, this.state.abilities)
    });
  }
  handleNameChange = (name) => {
    this.setState({
      name
    });
  }
  handlePlayerNameChange = (playerName) => {
    this.setState({
      playerName
    });
  }
  handleRaceChange = (raceName) => {
    this.setState({
      race: find(
        matches({name: raceName}),
        this.state.races)
    });
  }
  handleClassChosenChange = (classChosen) => {
    this.setState({
      classChosen: find(
        matches({name: classChosen}),
        this.state.classes)
    });
  }
  handleAligmentChange = (aligment) => {
    this.setState({
      aligment
    });
  }
  handleSkillChosen = (skillName) => {
    const {skills, skillsChosen, classChosen} = this.state;
    const newSkillsChosen = changeSkillsChosen(skillsChosen, skills, skillName);

    this.setState({
      skillsChosen: newSkillsChosen,
      skillsFull: newSkillsChosen.length === classChosen.proficiencies.skills.number
    });
  }
  render() {
    return (
      <ContainerFluid>
        <Row>
          <Col sm='12'>
            <BasicInformation classChosen={{}}
              race={this.state.race.name}
              races={this.name(this.state.races)}
              classChosen={this.state.classChosen.name}
              classes={this.name(this.state.classes)}
              aligment={this.state.aligment}
              aligments={this.state.aligments}
              level={this.level}
              onNameChange={this.handleNameChange}
              onPlayerNameChange={this.handlePlayerNameChange}
              onRaceChange={this.handleRaceChange}
              onClassChosenChange={this.handleClassChosenChange}
              onAligmentChange={this.handleAligmentChange}
              />
          </Col>
        </Row>
        <span className='space-16'></span>
        <Row>
          <Col sm='4'>
            <AbilityScores abilityScores={this.abilityScores}
              onAddAbilityScore={this.handleAddAbilityScore}
              onRemoveAbilityScore={this.handleRemoveAbilityScore} />
          </Col>
          <Col sm='4'>
            <SkillList skills={this.skills}
              skillsChosen={this.state.skillsChosen}
              full={this.state.skillsFull}
              onSkillChosen={this.handleSkillChosen}
            />
          </Col>
          <Col sm='4'>
            <SavingThrows savingThrows={this.savingThrows}/>
          </Col>
          <Col sm='4'>
            <DefenseCombatInformation ac={calcAC(
                this.abilityScores,
                this.state.baseAC
              )}
              initiative={getModifier('DEX', this.abilityScores)}
              speed={this.state.race.speed}
              hitPoints={this.maximumHitPoinst}
              maximum={this.maximumHitPoinst}/>
          </Col>
        </Row>
      </ContainerFluid>
    );
  }
}

export default App;