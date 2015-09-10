 var romanNumeral = function(number) {
   var numbersArray = [1000, 500, 100, 50, 10, 5, 1];
   var romanArray = ["M", "D", "C", "L", "X", "V", "I"];

    for (var i=0; i < numbersArray.length; i++ ) {
      if (numbersArray[i] === number) {
        return romanArray[i];
      }
        else if(number % numbersArray[i] === 0 ) {
          return romanArray[i].repeat(number);

        } else if(number % numbersArray[i] === 1) {
          return romanArray[i] + romanArray[6];
        }
    }
          debugger;
 };
