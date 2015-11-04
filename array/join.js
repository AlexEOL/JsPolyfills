/**
 * join polify
 *
 * @method     join
 * @param      {String}  separator  (description)
 * @return     {String}  (description_of_the_return_value)
 */
function join(separator) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.join called on null or undefined");
  };

  if (separator === undefined) {
    return this.toString();
  }

  var returnStr = '',
      i         = 0,
      length    = this.length;

  while (i < length-1) {

    returnStr += this[i];
    returnStr += separator;

    i++;
  }

  returnStr += this[i];

  return returnStr;
};