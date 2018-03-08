import { mapValues, isFunction, isObject } from 'lodash';

export function generateNewObjectWithAllFunctionsInvoked(object) {
  return mapValues(object, value => isFunction(value)
      ? value()
      : isObject(value) ? this(object) : value
    );
}
