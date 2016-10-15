import {mapValues} from 'lodash/fp';

const recursiveFreeze = object => {
  if (object === null || object === undefined || typeof object !== 'object') {
    return object;
  }

  const freezed = mapValues(
    recursiveFreeze,
    object);
  return Object.freeze(freezed);
};

export default recursiveFreeze;