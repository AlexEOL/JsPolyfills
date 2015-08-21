/**
 * pop polify
 *
 * @method     pop
 * @return     {Object}  (description_of_the_return_value)
 */
function pop() {
  "use strict";

  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.pop called on null or undefined");
  };
  
  return [this[this.length - 1], this.length - 1 >= 0 ? this.length-- : void 0][0];
};