import {maximumHealth} from './index';
import {
  HIT_DIE
} from '../feature-types';
import {
  CON,
  STR,
  DEX,
} from '../data/abilities';

describe('maximumHealth', () => {
  describe('given only one hit die', () => {
    const feats = [
      {
        type: HIT_DIE,
        payload: {
          value: 7
        }
      }
    ]

    it('when I calculate the maximum health', () => {
      const result = maximumHealth([], feats);
      expect(result).toEqual(7);
    })
  })

  describe('given one hit die with CON modifier 2', () => {
    const abilities = [{
      name: CON,
      modifier: 2
    }]
    const feats = [{
      type: HIT_DIE,
      payload: {
        value: 9
      }
    }]

    it('when I calculate the maximum health', () => {
      const result = maximumHealth(abilities, feats)
      expect(result).toEqual(11);
    })
  })

  describe('given two hit die and no CON modifier', () => {
    const abilities = [{
      name: STR,
      modifier: 2
    }]
    const feats = [
      {
        type: HIT_DIE,
        payload: {
          value: 5
        }
      },
      {
        type: HIT_DIE,
        payload: {
          value: 12
        }
      }
    ]

    it('when I calculate the maximum health', () => {
      const result = maximumHealth(abilities, feats);
      expect(result).toEqual(17);
    })
  })
  describe('given feats with hit die and others', () =>{
    const abilities = [{
      name: DEX,
      modifier: 5
    }]
    const feats = [
      {
        type: 'SOME_TYPE',
        payload: {
          value: 10
        }
      },
      {
        type: HIT_DIE,
        payload: {
          value: 4
        }
      }
    ]

    it('when I calculate the maximum health', () => {
      const result = maximumHealth(abilities, feats)
      expect(result).toEqual(4)
    })
  })
})