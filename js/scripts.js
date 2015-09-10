 var romanNumeral = function(input) {
   var numbersArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L","XL", "X", "IX", "V", "IV", "I"];
   var number = input;
   var array = [];

   while (number > 0) {
     for (var i=0; i < numbersArray.length; i++ ) {
       if(number >= numbersArray[i]) {
         array.push(romanArray[i]);
         number = number - numbersArray[i];
       }
     }
     i=0;
    }

    var output = '';
    for (var i=0; i < array.length; i++) {
      output += array[i];
   }

    return output;
  };

  $(document).ready(function() {
    $("form#converter").submit(function(event) {
      var input = parseInt($("input#input").val());
      var result = romanNumeral(input);

      $("#result").text(result);
      $("#results").show();
      event.preventDefault();
      debugger;
    });
  });
