/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
  let result = ""
  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt(i-1) !== str.charCodeAt(i) - 1) {
      result = String.fromCharCode(str.charCodeAt(i-1)+1);
    }
  }
  if (result === "") {
    result = undefined
  }

  console.log(result)
  return result;
}

fearNotLetter("abce");



/*
//charcodeat is a numerical representation of a character using the UTF-16 code unit. In practice this means that for example "a" is going to return a number smaller by one than "b". The program loops over every letter in the string except the first one and checks if the last letter has a charcode one smaller than the current one. If not (letters aren't in alphabetical order) then it takes the last letter that followed alphabetical order and using charcode sets the result variable to the next one, so the missing one. The reason we start iterating from index one and not zero is because there is no previous character at index zero. If no missing letter is found, then result is set to undefined. At the end it returns result.
*/