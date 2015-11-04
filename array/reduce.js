/**
 * reduce polify
 *
 * @method     reduce
 * @param      {Function}  callback      (description)
 * @param      {Object}    initialValue  (description)
 * @return     {Object}    (description_of_the_return_value)
 */
function reduce(callback, initialValue) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };

  var returnVal = initialValue || this[0],
      i         = !!initialValue ? 0 : 1,
      length    = this.length;

  while (i < length) {
    if (!!this[i]) {
      returnVal = callback(returnVal, this[i], i, this);
    }

    i++;
  }

 return returnVal;
};