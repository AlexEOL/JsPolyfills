/**
 * isArray polify
 *
 * @method     isArray
 * @param      {Object}   arg     (description)
 * @return     {Boolean}  (description_of_the_return_value)
 */
function isArray(arg) {
  "use strict";
  return Object.prototype.toString.call(arg) === '[object Array]';
};