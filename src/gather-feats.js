import {
  get,
  map,
  flatten,
  flow,
  filter,
  has,
  castArray,
} from 'lodash/fp';

const gatherFeats = flow(
  castArray,
  filter(has('feats')),
  map(get('feats')),
  flatten
)

export default gatherFeats;