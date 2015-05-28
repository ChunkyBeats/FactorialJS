var factorial = function(num) {
  var total = 1
  for(num; num > 0; num -= 1) {
    total *= num;
  }
  return total;
}

$(document).ready(function() {
  $("form#factorial").submit(function() {
    var num = parseInt($("input#number").val());
    var result = factorial(num);

    $("#result").show();
    $(".input").text(num);
    $(".result").text(factorial(num));

    event.preventDefault();

  });
});
