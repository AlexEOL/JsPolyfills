/**
 * forEach polify
 *
 * @param      {Function}  callback  (description)
 * @param      {Object}    context   (description)
 *
 * @return     {undefined}  (description_of_the_return_value)
 */
function forEach(callback, context) {
  var length = this.length,
      i      = 0;

  while (i < length) {
    if (!!this[i]) {
      callback.call(context || null, this[i], i, this);
    };

    i++;
  }
};