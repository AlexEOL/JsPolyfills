/**
 * indexOf polify
 *
 * @param      {String|Number}      searchEl   (description)
 * @param      {Number}             fromIndex  (description)
 *
 * @return     {number|<typename>}  (description_of_the_return_value)
 */
function indexOf(searchEl, fromIndex) {
  var returnIndex = -1,
      i           = ~~fromIndex || 0,
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