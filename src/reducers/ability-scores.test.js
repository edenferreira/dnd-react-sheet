import {ADD_ABILITY, REMOVE_ABILITY} from '../actions/names';
import {STR, DEX, CON, INT, WIS, CHA} from '../data/abilities';
import abilityScores from './ability-scores';

describe('given no state passed', () => {
  it('when called should return the initial state', () => {
    const expected = [STR, DEX, CON, INT, WIS, CHA]
      .map(name => ({
        name,
        value: 8,
        modifier: -1
      }))
    expect(abilityScores(undefined, {})).toEqual(expected)
  })
})

describe('given action with non expected type', () => {
  const action = {
    type: 'SOME_TYPE'
  };
  it('when called with some state', () => {
    const state = {something: 'else'}

    expect(abilityScores(state, action)).toEqual(state);
  })
})

describe('given the base state', () => {
  const baseState = Object.freeze(
    [STR, DEX, CON, INT, WIS, CHA].map(name => ({
      name,
      value: 8,
      modifier: -1
    })));

  it('when I add 1 STR', () => {
    const action = {
      type: ADD_ABILITY,
      name: STR,
      value: 1
    };
    const expected = [
      {
        name: STR,
        value: 9,
        modifier: -1
      },
      {
        name: DEX,
        value: 8,
        modifier: -1
      },
      {
        name: CON,
        value: 8,
        modifier: -1
      },
      {
        name: INT,
        value: 8,
        modifier: -1
      },
      {
        name: WIS,
        value: 8,
        modifier: -1
      },
      {
        name: CHA,
        value: 8,
        modifier: -1
      }
    ];
    expect(abilityScores(baseState, action)).toEqual(expected);
  })

  it('when I add 1 CHA', () => {
    const action = {
      type: ADD_ABILITY,
      name: CHA,
      value: 1
    };
    const expected = [
      {
        name: STR,
        value: 8,
        modifier: -1
      },
      {
        name: DEX,
        value: 8,
        modifier: -1
      },
      {
        name: CON,
        value: 8,
        modifier: -1
      },
      {
        name: INT,
        value: 8,
        modifier: -1
      },
      {
        name: WIS,
        value: 8,
        modifier: -1
      },
      {
        name: CHA,
        value: 9,
        modifier: -1
      }
    ];
    expect(abilityScores(baseState, action)).toEqual(expected)
  })

  it('when I add 2 INT', () => {
    const action = {
      type: ADD_ABILITY,
      name: INT,
      value: 2
    };

    const expected = [
      {
        name: STR,
        value: 8,
        modifier: -1
      },
      {
        name: DEX,
        value: 8,
        modifier: -1
      },
      {
        name: CON,
        value: 8,
        modifier: -1
      },
      {
        name: INT,
        value: 10,
        modifier: 0
      },
      {
        name: WIS,
        value: 8,
        modifier: -1
      },
      {
        name: CHA,
        value: 8,
        modifier: -1
      }
    ]
    expect(abilityScores(baseState, action)).toEqual(expected)
  })

  it('when I remove 5 CON', () => {
    const action = {
      type: REMOVE_ABILITY,
      name: CON,
      value: 5
    };
    const expected = [
      {
        name: STR,
        value: 8,
        modifier: -1
      },
      {
        name: DEX,
        value: 8,
        modifier: -1
      },
      {
        name: CON,
        value: 3,
        modifier: -4
      },
      {
        name: INT,
        value: 8,
        modifier: -1
      },
      {
        name: WIS,
        value: 8,
        modifier: -1
      },
      {
        name: CHA,
        value: 8,
        modifier: -1
      }
    ]
    expect(abilityScores(baseState, action)).toEqual(expected)
  })
})