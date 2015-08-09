/**
 * join polify
 *
 * @param      {String}  separator  (description)
 *
 * @return     {String}  (description_of_the_return_value)
 */
function join(separator) {

  if (!separator) {
    return this.toString();
  }

  var returnStr = '',
      i         = 0,
      length    = this.length;

  while (i < length-1) {

    returnStr += this[i];
    returnStr += separator;

    i++;
  }

  returnStr += this[i];

  return returnStr;
};