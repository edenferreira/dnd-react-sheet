import {STR, DEX, CON, INT, WIS, CHA} from './abilities';
import {
  BATTLE_AXE, HANDAXE, THROWING_HAMMER, WARHAMMER
} from './weapons';
import {
  COMMON, DWARVEN, ELVISH, HALFLINGLANG, ANY_LANGUAGE
} from './languages';
import {SMALL, MEDIUM} from './sizes';
import {PERCEPTION} from './proficiencies';

export const DWARF = Object.freeze({
  name: 'Dwarf',
  abilities: [
    {
      name: CON,
      amount: 2
    }
  ],
  size: MEDIUM,
  speed: 25,
  traits: [
    {
      name: 'Darkvision'
    },
    {
      name: 'Dwarven Resiliance'
    },
    {
      name: 'Stone Cutting'
    }
  ],
  weaponProficiencies: [
    BATTLE_AXE,
    HANDAXE,
    THROWING_HAMMER,
    WARHAMMER
  ],
  languages: [
    COMMON,
    DWARVEN
  ]
});

export const ELF = Object.freeze({
  name: 'Elf',
  abilities: [
    {
      name: DEX,
      amount: 2
    }
  ],
  size: MEDIUM,
  speed: 30,
  proficiencies: [
    PERCEPTION
  ],
  traits: [
    {
      name: 'Darkvision'
    },
    {
      name: 'Keen Senses'
    },
    {
      name: 'Fey Ancestry'
    },
    {
      name: 'Trance'
    }
  ],
  languages: [
    COMMON,
    ELVISH
  ]
});

export const HALFLING = Object.freeze({
  name: 'Halfling',
  abilities: [
    {
      name: DEX,
      amount: 2
    }
  ],
  size: SMALL,
  speed: 25,
  traits: [
    {
      name: 'Lucky'
    },
    {
      name: 'Brave'
    },
    {
      name: 'Halfling Nimbleness'
    }
  ],
  languages: [
    COMMON,
    HALFLINGLANG
  ]
})

export const HUMAN = Object.freeze({
  name: 'Human',
  abilities: [
    {
      name: STR,
      amount: 1
    },
    {
      name: DEX,
      amount: 1
    },
    {
      name: CON,
      amount: 1
    },
    {
      name: INT,
      amount: 1
    },
    {
      name: WIS,
      amount: 1
    },
    {
      name: CHA,
      amount: 1
    }
  ],
  size: MEDIUM,
  speed: 30,
  languages: [
    COMMON,
    ANY_LANGUAGE
  ]
})