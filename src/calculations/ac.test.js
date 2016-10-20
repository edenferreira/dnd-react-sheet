import {
  ac
} from './index';
import {
  DEX,
  STR,
  CON,
} from '../data/abilities';
import {
  AC,
} from '../feature-types';

describe('ac', () => {
  describe('given only bases', () => {
    const bases = [8];

    it('when I calculate the ac', () => {
      const result = ac(bases);
      expect(result).toEqual(bases[0]);
    })
  })

  describe('given only bases', () => {
    const bases = [5, 11]

    it('when I calculate the ac', () => {
      const result = ac(bases);
      expect(result).toEqual(16)
    })
  })

  describe('given bases with modifier 2 in dex', () => {
    const bases = [11];
    const abilities = [{
      name: DEX,
      modifier: 2
    }];

    it('when I calculate the ac', () => {
      const result = ac(bases, abilities);
      expect(result).toEqual(13);
    })
  })

  describe('given bases with modifier', () => {
    const bases = [7];
    const abilities = [{
      name: DEX,
      modifier: 1
    }];

    it('when I calculate the ac', () => {
      const result = ac(bases, abilities)
      expect(result).toEqual(8)
    })
  })

  describe('given bases with modifier from two abilties', () => {
    const bases = [19];
    const abilties = [{
      name: STR,
      modifier: 3
    }, {
      name: DEX,
      modifier: 2
    }]

    it('when I calculate the ac', () => {
      const result = ac(bases, abilties)
      expect(result).toEqual(21)
    })
  })

  describe('given bases with modifier and feat to add CON', () => {
    const bases = [5, 5];
    const abilities = [{
      name: DEX,
      modifier: 2
    }, {
      name: CON,
      modifier: 4
    }]
    const feats = [{
      type: AC,
      payload: {
        ability: CON
      }
    }]

    it('when I calculate the ac', () => {
      const result = ac(bases, abilities, feats);
      expect(result).toEqual(16)
    })
  })
})