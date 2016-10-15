import * as abilities from './abilities';
import * as weapons from './weapons';
import * as sizes from './sizes';
import * as languages from './languages';
import * as skills from './skills';
import * as races from './races';
import * as aligments from './aligments';
import {map, values} from 'lodash/fp';

export const data = Object.freeze({
  abilities,
  weapons,
  sizes,
  languages,
  skills,
  races,
  aligments
});

const initialState = Object.freeze({
  ...data,
  abilities: map(name => ({name, value: 8}), data.abilities),
  skills: map(skill => ({...skill, value: 0}), data.skills),
  aligments: values(data.aligments)
});

export const getInitialState = () => initialState;