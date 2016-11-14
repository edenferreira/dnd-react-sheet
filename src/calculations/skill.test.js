import {skill} from './index';
import {abilitiesWithModifiers} from './test-helpers';
import {
  ACROBATICS,
  PERCEPTION,
  STEALTH,
  DECEPTION,
  ANIMAL_HANDLING,
  MEDICINE,
} from '../data/skills'
import {
  STR,
  CON,
  DEX,
  INT,
  WIS,
  CHA,
} from '../data/abilities';
import {
  map,
} from 'lodash/fp';
import {
  SKILL,
} from '../feature-types';

describe('skill', () => {
  it('when called without any parameter', () => {
    expect(skill).toThrowError('both the skill and the abilities are required');
  })

  it('when called with invalid skill', () => {
    expect(() => skill({something: 'here'}))
      .toThrowError('both the skill and the abilities are required')

  })

  it('when called only with the skill valid', () => {
    expect(() => skill({
      ...PERCEPTION,
      proficient: true
    })).toThrowError('abilities are required')
  })

  describe('given abilities with 0 for modifier', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(0);
    });

    it('when I called to calculate one ability without proficiency', () => {
      const result = skill(
        ACROBATICS,
        abilities);
      expect(result).toEqual(0);
    })

    describe('given feats with proficiency in animal handling', () => {
      let feats;
      beforeEach(() => {
        feats = [{
          type: 'ANOTHER',
          payload: {
            name: ANIMAL_HANDLING.name,
            proficient: true
          }
        },{
          type: SKILL,
          payload: {
            name: ANIMAL_HANDLING.name,
            proficient: true
          }
        }]
      })

      it('when I called to calculate one ability with proficiency', () => {
        const result = skill(
          ANIMAL_HANDLING,
          abilities,
          feats);
        expect(result).toEqual(3);
      })
    })
  })

  describe('given abilities with 3 for modifier', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(3);
    });

    it('when I called to calculate one ability without proficiency', () => {
      const result = skill(
        STEALTH,
        abilities);
      expect(result).toEqual(3);
    })

    describe('given feats with proficiency in deception and value to acrobatics and medicine', () => {
      let feats;
      beforeEach(() => {
        feats = [{
          type: SKILL,
          payload: {
            name: DECEPTION.name,
            proficient: true
          }
        }, {
          type: SKILL,
          payload: {
            name: ACROBATICS.name,
            value: 5
          }
        }, {
          type: SKILL,
          payload: {
            name: MEDICINE.name,
            value: 2
          }
        }]
      })

      it('when I called to calculate deception', () => {
        const result = skill(
          DECEPTION,
          abilities,
          feats);
        expect(result).toEqual(6);
      })

      it('when I called to calculate medicine', () => {
        const result = skill(
          MEDICINE,
          abilities,
          feats);
        expect(result).toEqual(5);
      })
    })
  })
})