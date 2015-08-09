/**
 * bind polify
 *
 * @param      {<type>}    context  (description)
 *
 * @return     {Function}  (description_of_the_return_value)
 */
function bind(context) {
  var fn          = this,
      slice       = Array.prototype.slice,
      args        = slice.call(arguments, 1),
      ptorotypeFn = function() {};

  ptorotypeFn.prototype = fn.prototype;
  returnFn.prototype    = new ptorotypeFn();

  function returnFn() {
    return fn.apply(context || null, slice.call(arguments).concat(args));
  };

  return returnFn;
};