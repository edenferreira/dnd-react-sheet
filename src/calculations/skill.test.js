import {skill} from './index';
import {abilitiesWithModifiers} from './test-helpers';
import {
  ACROBATICS,
  PERCEPTION,
  STEALTH,
  DECEPTION,
  ANIMAL_HANDLING,
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
      const result = skill({
        ...ACROBATICS,
        proficient: false
      }, abilities);
      expect(result).toEqual(0);
    })

    it('when I called to calculate one ability with proficiency', () => {
      const result = skill({
        ...ANIMAL_HANDLING,
        proficient: true
      }, abilities);
      expect(result).toEqual(3);
    })
  })

  describe('given abilities with 3 for modifier', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(3);
    });

    it('when I called to calculate one ability without proficiency', () => {
      const result = skill({
        ...STEALTH,
        proficient: false
      }, abilities);
      expect(result).toEqual(3);
    })

    it('when I called to calculate one ability with proficiency', () => {
      const result = skill({
        ...DECEPTION,
        proficient: true
      }, abilities);
      expect(result).toEqual(6);
    })
  })
})