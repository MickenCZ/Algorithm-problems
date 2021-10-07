/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let uppercaseLetter = /[A-Z]/
  let result = ""

  for (let i = 0; i < str.length; i++) {
    if (uppercaseLetter.test(str[i])) {
      if (str.charCodeAt(i) <= 77) {
        result += String.fromCharCode(str.charCodeAt(i)-13+26)
      }
      else {
        result += String.fromCharCode(str.charCodeAt(i)-13)
        }
    }
    else {
      result += str[i]
    }
  }

  return result;
}


//for every letter in str it checks if its an uppercase letter. If not, it just passes it to result as it is. If it is, it passes a letter shifted back by 13. If it overflows (letter comes before the 14th) it is shifted by 26 forward (length of the alphabet).