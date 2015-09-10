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
 //    for (var i=0; i < numbersArray.length; i++ ) {
 //      if (numbersArray[i] === number) {
 //        return romanArray[i];
 //      }
 //        else if(number % numbersArray[i] === 0 ) {
 //          return romanArray[i].repeat(number);
 //
 //      }
 //      else if(number % numbersArray[i] === 1) {
 //          return romanArray[i] + romanArray[6];
 //      }
 //      else if(number % numbersArray[i] === 2) {
 //        return romanArray[i] + romanArray[6].repeat(2);
 //
 //      }
 //      else if(number % numbersArray[i] === 3) {
 //        return romanArray[i] + romanArray[6].repeat(3);
 //      }
 //    }
 //          debugger;
 // };
