import recursiveFreeze from '../recursive-freeze';
import {
  LIGHT_ARMOR,
  MEDIUM_ARMOR,
  SIMPLE_WEAPON,
  MARTIAL_WEAPON,
  HAND_CROSSBOW,
  LONGSWORD,
  RAPIER,
  SHORTSWORD,
} from './equipament-types';
import {STR, DEX, CON, CHA} from './abilities';
import * as skills from './skills';

export const BARBARIAN = recursiveFreeze({
  name: 'BARBARIAN',
  hitDie: 12,
  proficiencies: {
    armor: [
      LIGHT_ARMOR,
      MEDIUM_ARMOR,
    ],
    shield: true,
    weapons: [
      SIMPLE_WEAPON,
      MARTIAL_WEAPON,
    ],
    savingThrows: [
      STR,
      CON,
    ],
    skills: {
      choices: [
        skills.ANIMAL_HANDLING,
        skills.ATHLETICS,
        skills.INTIMIDATION,
        skills.NATURE,
        skills.PERCEPTION,
        skills.SURVIVAL,
      ],
      number: 2,
    }
  }
});

export const BARD = recursiveFreeze({
  name: 'BARD',
  hitDie: 8,
  proficiencies: {
    armor: [
      LIGHT_ARMOR
    ],
    weapons: [
      SIMPLE_WEAPON,
      HAND_CROSSBOW,
      LONGSWORD,
      RAPIER,
      SHORTSWORD,
    ],
    savingThrows: [
      DEX,
      CHA
    ],
    skills: {
      choices: skills,
      number: 3
    }
  }
});
