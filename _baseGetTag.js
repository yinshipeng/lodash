define(['./_Symbol', './_getRawTag', './_objectToString'], function(Symbol, getRawTag, objectToString) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    value = Object(value);
    return (symToStringTag && symToStringTag in value)
      ? getRawTag(value)
      : objectToString(value);
  }

  return baseGetTag;
});
