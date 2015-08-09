/**
 * isArray polify
 *
 * @param      {<type>}  arg     (description)
 *
 * @return     {Boolean}  (description_of_the_return_value)
 */
function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
};