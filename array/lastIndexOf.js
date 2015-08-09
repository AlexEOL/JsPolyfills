/**
 * lastIndexOf polify
 *
 * @param      {<type>}  searchEl   (description)
 * @param      {Number}  fromIndex  (description)
 *
 * @return     {Number}  (description_of_the_return_value)
 */
function lastIndexOf(searchEl, fromIndex) {
  var returnIndex = -1,
      i           = ~~fromIndex || this.length;

  while (i > 0) {
    if (this[i] === searchEl) {
      returnIndex = i;
      break;
    }
    i--;
  }

  return returnIndex;
};