import recursiveFreeze from '../recursive-freeze';
import {
  LIGHT_ARMOR,
  MEDIUM_ARMOR,
  SHIELD,
  SIMPLE_WEAPON,
  MARTIAL_WEAPON,
} from './equipament-types';
import {STR, CON} from './abilities';
import {
  ANIMAL_HANDLING,
  ATHLETICS,
  INTIMIDATION,
  NATURE,
  PERCEPTION,
  SURVIVAL,
} from './skills';

export const BARBARIAN = recursiveFreeze({
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
      choice: [
        ANIMAL_HANDLING,
        ATHLETICS,
        INTIMIDATION,
        NATURE,
        PERCEPTION,
        SURVIVAL,
      ],
      number: 2,
    }
  }
});