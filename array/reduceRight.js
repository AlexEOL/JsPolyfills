/**
 * reduceRight polify
 *
 * @method     reduceRight
 * @param      {Function}  callback      (description)
 * @param      {Object}    initialValue  (description)
 * @return     {Object}    (description_of_the_return_value)
 */
function reduceRight(callback, initialValue) {
  "use strict";
  
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.reduce called on null or undefined");
  };

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  };

  var returnVal = initialValue || this[this.length],
      i         = !!initialValue ? this.length : this.length-1,
      length    = this.length;

  while (i < length) {
    if (!!this[i]) {
      returnVal = callback(returnVal, this[i], i, this);
    }

    i--;
  }

 return returnVal;
};