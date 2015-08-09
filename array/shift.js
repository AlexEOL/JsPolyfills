/**
 * shift polify
 *
 * @return     {Object}  (description_of_the_return_value)
 */
function shift() {
  var returnVal = this[0],
      i         = 1,
      length    = this.length;

  while (i < length) {
    this[i-1] = this[i];
    i++;
  };

  return this.length-- && returnVal;
};