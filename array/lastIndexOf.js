/**
 * lastIndexOf polify
 *
 * @method     lastIndexOf
 * @param      {Object}  searchEl   (description)
 * @param      {Number}  fromIndex  (description)
 * @return     {Number}  (description_of_the_return_value)
 */
function lastIndexOf(searchEl, fromIndex) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.join called on null or undefined");
  };

  var returnIndex = -1,
      i           = arguments.length > 1 ? (fromIndex === null || fromIndex === undefined ? 0 : ~~fromIndex) : this.length;

  while (i > 0) {
    if (this[i] === searchEl) {
      returnIndex = i;
      break;
    }
    i--;
  }

  return returnIndex;
};