exports.countMissing = function (input) {
    let close = 0;
    let open = 0;
    for (const character of input) {
      if (character === '(') open++;
      else if (character === ')') {
        if (open === 0) close++;
        else open--;
      }
    }
    return open + close;
  }
  
 