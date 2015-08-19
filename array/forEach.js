/**
 * forEach polify
 *
 * @method     forEach
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 * @return     {undefined}  (description_of_the_return_value)
 */
function forEach(callback, context) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.forEach called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };

  var length = this.length,
      i      = 0;

  while (i < length) {
    if (!!this[i]) {
      callback.call(context || null, this[i], i, this);
    };

    i++;
  }
};