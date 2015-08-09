/**
 * reverse polify
 *
 * @return     {Array}  (description_of_the_return_value)
 */
function reverse() {
  var i         = 0,
      lastIndex = this.length-1;

  function reverse(array) {
    if (i > lastIndex-i) {
      return array;
    }

    var first = array[i],
        last  = array[lastIndex-i];

    array[lastIndex-i] = [ first, array[i] = last ][0];

    i++;

    return reverse(array);
  }

  return reverse(this);
};