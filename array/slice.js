/**
 * slice polify
 *
 * @method     slice
 * @param      {Number}  begin   (description)
 * @param      {Number}  end     (description)
 * @return     {Array}   (description_of_the_return_value)
 */

function slice(begin, end) {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.slice called on null or undefined");
  };

  if (arguments.length === 1) {
    end = this.length;
  };

  var returnArr = [],
      i         = arguments.length > 0 ? ~~begin : 0,
      length    = arguments.length > 1 ? ~~end : this.length;

  while (i < length) {
    returnArr.push(this[i]);
    i++;
  }

  return returnArr;
};