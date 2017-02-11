import gatherFeats from './gather-feats'

describe('gatherFeats', () => {
  describe('given one object with one feat', () => {
    let withFeat;
    beforeEach(() => {
      withFeat = {
        feats: [{
          type: 'SOME_TYPE',
          payload: {
            value: 5
          }
        }]
      }
    })

    it('when I gather the feats', () => {
      const result = gatherFeats(withFeat);

      expect(result).toEqual([{
        type: 'SOME_TYPE',
        payload: {
          value: 5
        }
      }])
    })

    describe('given a object with two feats', () => {
      let withFeat;
      beforeEach(() => {
        withFeat = {
          feats: [{
            type: 'ANOTHER_TYPE',
            payload: {
              value: 7
            }
          }, {
            type: 'YET_OTHER',
            payload: {
              value: 3
            }
          }]
        }
      })

      it('when I gather the feats', () => {
        const result = gatherFeats(withFeat);

        expect(result).toEqual([{
          type: 'ANOTHER_TYPE',
          payload: {
            value: 7
          }
        }, {
          type: 'YET_OTHER',
          payload: {
            value: 3
          }
        }])
      })
    })

    describe('given a list with one objec and feats in it', () => {
      let withFeat;
      beforeEach(() => {
        withFeat = [{
          feats: [{
            type: 'FEAT_TYPE',
            payload: {
              some: 'thing'
            }
          }]
        }]
      })

      it('when I gather the feats', () => {
        const result = gatherFeats(withFeat)

        expect(result).toEqual([{
          type: 'FEAT_TYPE',
          payload: {
            some: 'thing'
          }
        }])
      })
    })

    describe('given a list with two object with feats', () => {
      let withFeat;
      beforeEach(() => {
        withFeat = [{
          feats: [{
            type: 'FEAT_TYPE',
            payload: {
              another: 'thing'
            }
          }]
        }, {
          feats: [{
            type: 'TYPE_OF_FEAT',
            payload: {
              value: 10
            }
          }]
        }]
      })

      it('when I gather the feats', () => {
        const result = gatherFeats(withFeat)

        expect(result).toEqual([{
          type: 'FEAT_TYPE',
          payload: {
            another: 'thing'
          }
        }, {
          type: 'TYPE_OF_FEAT',
          payload: {
            value: 10
          }
        }])
      })
    })

    describe('given three objects in wich only two have feats', () => {
      let withFeat;
      beforeEach(() => {
        withFeat = [{
          feats: [{
            type: 'SOME_TYPE',
            payload: {
              value: 5
            }
          }, {
            type: 'SOME_TYPE',
            payload: {
              some: 'thing'
            }
          }]
        }, {
          normal: 'object'
        }, {
          parameter: 'X',
          feats: [{
            type: 'ANOTHER',
            payload: {
              pay: 'load'
            }
          }]
        }]
      })

      it('when I gather the feats', () => {
        const result = gatherFeats(withFeat)

        expect(result).toEqual([{
          type: 'SOME_TYPE',
          payload: {
            value: 5
          }
        }, {
          type: 'SOME_TYPE',
          payload: {
            some: 'thing'
          }
        }, {
          type: 'ANOTHER',
          payload: {
            pay: 'load'
          }
        }])
      })
    })
  })
})