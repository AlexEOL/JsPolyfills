/**
 * slice polify
 *
 * @param      {Number}  begin   (description)
 * @param      {Number}  end     (description)
 *
 * @return     {Array}   (description_of_the_return_value)
 */
function slice( begin, end ) {
  if (arguments.length === 1) {
    end = this.length;
  }

  var returnArr = [],
      i         = ~~begin >= 0 ? ~~begin : this.length+~~begin,
      length    = (!!end || ~~end === 0) ? (~~end >= 0 ? ~~end : this.length+~~end) : this.length;

  while (i < length) {
    returnArr.push(this[i]);
    i++;
  }

  return returnArr;
};