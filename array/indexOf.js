/**
 * indexOf polify
 *
 * @method     indexOf
 * @param      {String|Number}       searchEl   (description)
 * @param      {Number}              fromIndex  (description)
 * @return     {number| <typename>}  (description_of_the_return_value)
 */
function indexOf(searchEl, fromIndex) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.indexOf called on null or undefined");
  };

  var returnIndex = -1,
      i           = ~~fromIndex,
      length      = this.length;

  while (i < length) {
    if (this[i] === searchEl) {
      returnIndex = i;
      break;
    }
    i++;
  }

  return returnIndex;
};