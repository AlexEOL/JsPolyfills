/**
 * map polify
 *
 * @method     map
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 * @return     {Array}     (description_of_the_return_value)
 */
function map(callback, context) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.map called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };

  var returnArr = [],
      i         = 0,
      length    = this.length;

  while (i < length) {
    if (!!this[i]) {
      returnArr[i] = callback.call(context || null, this[i], i, this);
    }

    i++;
  }

  return returnArr;
};