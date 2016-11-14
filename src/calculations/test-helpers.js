import {
  map,
} from 'lodash/fp';
import {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
} from '../data/abilities';

export const abilitiesWithModifiers = (
  modifier
) => map(name => ({name, modifier}), [STR, DEX, CON, INT, WIS, CHA])