/**
 * filter polify
 *
 * @param      {Function}  callback  (description)
 * @param      {<type>}  context   (description)
 *
 * @return     {Array}   (description_of_the_return_value)
 */
function filter(callback, context) {
  var length   = this.length,
      i        = 0,
      result   = [];

  while (i < length) {
    if (!!this[i]) {
      if (!!callback.call(context || null, this[i], i, this)) {
        result.push(this[i]);
      }
    };

    i++;
  }

  return result;
};