var factorial = function(num) {
  var total = 1
  for(num; num > 0; num -= 1) {
    total *= num;
  }
  return total;
}
