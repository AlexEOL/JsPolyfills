/**
 * map polify
 *
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 *
 * @return     {Array}     (description_of_the_return_value)
 */
function map(callback, context) {
  var returnArr = [],
      i         = 0,
      length    = this.length;

  while (i < length) {
    if (!!this[i]) {
      returnArr[i] = callback.call(context || null, this[i], i, this);
    }

    i++;
  }

  return returnArr;
};