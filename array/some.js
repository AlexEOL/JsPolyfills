/**
 * some polify
 *
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 *
 * @return     {boolean}   (description_of_the_return_value)
 */
function some(callback, context) {
  var returnVal = false,
      i         = 0,
      length    = this.length;

  while (i < length) {
    returnVal = callback.call(context || null, this[i], i, this);
    if (!!returnVal) {
      break;
    }

    i++;
  };

  return returnVal;
};