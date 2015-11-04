/**
 * filter polify
 *
 * @method     filter
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 * @return     {Array}     (description_of_the_return_value)
 */
function filter(callback, context) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.filter called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };

  var length   = this.length,
      i        = 0,
      result   = [];

  while (i < length) {
    if (!!this[i]) {
      if (!!callback.call(context || null, this[i], i, this)) {
        result.push(this[i]);
      }
    };

    i++;
  }

  return result;
};