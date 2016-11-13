import {initiative} from './index';
import {
  DEX,
  STR,
  CON,
} from '../data/abilities'
import {
  INITIAVE,
} from '../feature-types'

describe('initiative', () => {
  it('when called with nothing', () => {
    const result = initiative();
    expect(result).toEqual(0);
  })

  describe('given abilities with modifier of DEX 2', () => {
    const abilities = [{
      name: DEX,
      modifier: 2
    }]

    it('when I calculate the initiative', () => {
      const result = initiative(abilities);
      expect(result).toEqual(2)
    })
  })

  describe('given abilities with modifier of STR 2 and DEX 0', () => {
    const abilities = [{
      name: STR,
      modifier: 2
    }, {
      name: DEX,
      modifier: 1
    }]

    it('when I calculate the initiative', () => {
      const result = initiative(abilities);
      expect(result).toEqual(1)
    })
  })

  describe('given multiple abilities and DEX with modifier 3', () => {
    const abilities = [{
      name: CON,
      modifier: -1
    }, {
      name: DEX,
      modifier: 3
    }, {
      name: STR,
      modifier: 1
    }]

    it('when I calculate the initiative', () => {
      const result = initiative(abilities)
      expect(result).toEqual(3)
    })
  })

  describe('given feat that add 3 and DEX modifier of 4', () => {
    const abilities = [{
      name: DEX,
      modifier: 4
    }]
    const feats = [{
      type: INITIAVE,
      payload: {
        value: 3
      }
    }]

    it('when I calculate the initiative', () => {
      const result = initiative(abilities, feats)
      expect(result).toEqual(7)
    })
  })

  describe('given feats, only one that add 5 and DEX modifier of 1', () => {
    const abilities = [{
      name: DEX,
      modifier: 1
    }]
    const feats = [{
      type: 'SOME_TYPE',
      payload: {
        value: 3
      },
    }, {
      type: INITIAVE,
      payload: {
        value: 5
      }
    }];

    it('when I calculate the initiative', () => {
      const result = initiative(abilities, feats)
      expect(result).toEqual(6)
    })
  })
})