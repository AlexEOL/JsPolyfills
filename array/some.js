/**
 * some polify
 *
 * @method     some
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 * @return     {boolean}   (description_of_the_return_value)
 */
function some(callback, context) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };
  
  var returnVal = false,
      i         = 0,
      length    = this.length;

  while (i < length) {
    returnVal = callback.call(context || null, this[i], i, this);
    if (!!returnVal) {
      break;
    }

    i++;
  };

  return returnVal;
};