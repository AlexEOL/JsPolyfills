/**
 * shift polify
 *
 * @method     shift
 * @return     {Object}  (description_of_the_return_value)
 */
function shift() {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.shift called on null or undefined");
  };
  
  var returnVal = this[0],
      i         = 1,
      length    = this.length;

  while (i < length) {
    this[i-1] = this[i];
    i++;
  };

  return [returnVal, this.length - 1 >= 0 ? this.length-- : void 0][0];
};