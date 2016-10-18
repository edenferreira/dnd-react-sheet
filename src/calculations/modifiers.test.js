import {modifiers} from './index'

describe('modifiers', () => {
  describe('given a list with two values', () => {
    const list = [
      {
        value: 6
      },
      {
        value: 12
      }
    ]

    it('when I calculate the modifiers', () => {
      const result = modifiers(list);
      expect(result).toEqual([
        {
          value: 6,
          modifier: -2
        },
        {
          value: 12,
          modifier: 1
        }
      ])
    })
  })
  describe('given a list with three values and other parameters', () => {
    const list = [
      {
        name: 'something',
        value: 14,
      },
      {
        param: 'another',
        value: 8,
      },
      {
        name: 'yet another',
        value: 13,
      }
    ]
    it('when I calculate the modifiers', () => {
      const result = modifiers(list);
      expect(result).toEqual([
        {
          name: 'something',
          value: 14,
          modifier: 2
        },
        {
          param: 'another',
          value: 8,
          modifier: -1
        },
        {
          name: 'yet another',
          value: 13,
          modifier: 1
        }
      ])
    })
  })
})