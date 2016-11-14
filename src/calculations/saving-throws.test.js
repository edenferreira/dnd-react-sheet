import {savingThrow} from './index';
import {abilitiesWithModifiers} from './test-helpers';
import {
  SAVING_THROW,
} from '../feature-types';
import {
  STR,
  DEX,
  INT,
  WIS,
  CON,
} from '../data/abilities';
import {
  map,
} from 'lodash/fp';

describe('saving throw', () => {
  it ('when I called without arguments', () => {
    expect(() => {
      savingThrow()
    }).toThrowError('both the ability and the abilities are required')
  })

  it('when I called only with the ability', () => {
    expect(() => {
      savingThrow({
        abilities: STR
      })
    }).toThrowError('both the ability and the abilities are required')
  })

  it('when I called only with the abilities', () => {
    expect(() => {
      savingThrow(undefined, [{
        name: STR,
        modifier: 0
      }])
    }).toThrowError('both the ability and the abilities are required')
  })

  describe('given abilities with modifier -1', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(-1);
    });

    it('when I calculate saving throw for STR without proficiency', () => {
      const result = savingThrow({
        ability: STR
      }, abilities);
      expect(result).toEqual(-1);
    })
  })

  describe('given abilities with modifier 2', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(2);
    })

    it('when I calculate savingThrow for DEX without proficiency', () => {
      const result = savingThrow({
        ability: DEX
      }, abilities);
      expect(result).toEqual(2)
    })
  })

  describe('given WIS ability with modifer -3', () => {
    let abilities;
    beforeEach(() => {
      abilities = map(ability => {
        if (ability.name === WIS) {
          return {
            ...ability,
            modifier: -3
          };
        }
        return ability;
      }, abilitiesWithModifiers(0));
    })

    it('when I calculate the savingThrow for WIS without proficiency', () => {
      const result = savingThrow({
        ability: WIS
      }, abilities);
      expect(result).toEqual(-3)
    })
  })

  describe('given abilities with modifer 4', () => {
    let abilities;
    beforeEach(() => {
      abilities = abilitiesWithModifiers(4)
    })

    describe('given proficiency with INT and STR and value added to CON', () => {
      let feats;
      beforeEach(() => {
        feats = [{
          type: 'ANOTHER',
          payload: {
            ability: WIS,
            proficient: true,
          }
        }, {
          type: SAVING_THROW,
          payload: {
            ability: INT,
            proficient: true
          }
        }, {
          type: SAVING_THROW,
          payload: {
            ability: STR,
            proficient: true
          }
        }, {
          type: SAVING_THROW,
          payload: {
            ability: CON,
            value: 2
          }
        }, {
          type: SAVING_THROW,
          payload: {
            ability: CON,
            value: 3
          }
        }]
      })

      it('when I calculate the savingThrow for INT', () =>{
        const result = savingThrow({
          ability: INT,
        }, abilities, feats);
        expect(result).toEqual(7);
      })

      it('when I calculate savingThrow for WIS', () => {
        const result = savingThrow({
          ability: WIS,
        }, abilities, feats);
        expect(result).toEqual(4);
      })

      it('when I calculate savingThrow for CON', () => {
        const result = savingThrow({
          ability: CON,
        }, abilities, feats);
        expect(result).toEqual(9)
      })
    })
  })
});