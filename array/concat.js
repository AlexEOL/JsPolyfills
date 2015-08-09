/**
 * concat polify
 *
 * @return     {Array}  (description_of_the_return_value)
 */
function concat() {
  var array  = [],
      args   = arguments,
      i      = 0,
      length = args.length;

  function innerConcat(array, arg) {
    if (Array.isArray(arg)) {
      var i      = 0,
          length = arg.length;

      while (i < length) {
        array.push(arg[i]);
        i++;
      }
    } else {
      array.push(arg);
    };
  };

  innerConcat(array, this);
  while (i < length) {
    innerConcat(array, args[i]);
    i++;
  };


  return array;
};