/*
Roman Numeral ConverterPassed
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let result = ""
  if (num > 3999) {return "Number is too big!"}

  while (num != 0) {
    if (num >= 1000) {result += "M"; num -= 1000; continue}
    if (num >= 900) {result += "CM"; num -= 900; continue}
    if (num >= 500) {result += "D"; num -= 500; continue}
    if (num >= 400) {result += "CD"; num -= 400; continue}
    if (num >= 100) {result += "C"; num -= 100; continue}
    if (num >= 90) {result += "XC"; num -= 90; continue}
    if (num >= 50) {result += "L"; num -= 50; continue}
    if (num >= 40) {result += "XL"; num -= 40; continue}
    if (num >= 10) {result += "X"; num -= 10; continue}
    if (num >= 9) {result += "IX"; num -= 9; continue}
    if (num >= 5) {result += "V"; num -= 5; continue}
    if (num >= 4) {result += "IV"; num -= 4; continue}
    if (num >= 1) {result += "I"; num -= 1; continue}
  }
 return result
}




//So I know this solution looks like the the kind of thing that is your first idea and it looks funny. But upon further inspection, I fell it's actually really good at doing it's job. It works, it has the same time complexity as using a lookup array of objects and it's definitely easier to understand. It's more lines, but in converter functions that are going to be closed in the editor most of the times anyway it's okay. First it makes a result string and checks if the number is too big for the roman number system. Then while num isn't zero, it checks from biggest to lowest for letters. If the number is 1001 for example, it first finds the larger than thousand condition, adds M to the beginning of the result string, removes 1000 from num and stops this iteration of the while loop using continue. Then num is one, it goes all the way down and sees that num is larger or equal to one, decrements it by that amount (one) and stops this iteration. Now it's zero, so the while loop condition isn't met and it's done. It works like this for all numbers 1-3999. Perhaps a fail condition for numbers smaller than 1 and decimal numbers could  have been written.