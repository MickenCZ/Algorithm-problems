/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "<":
        arr[i] = "&lt;"
        break
      case ">":
        arr[i] = "&gt;"
        break
      case "&":
        arr[i] = "&amp;"
        break
      case '"':
        arr[i] = "&quot;"
        break
      case "'":
        arr[i] = "&apos;"
        break
    }
  }
  str = arr.join("")
  console.log(str)
  return str
}

convertHTML("Dolce & Gabbana");


//I convert the string into an array of characters. I used a case and switch statement to convert the HTML entities. It checks if a character is equal to some of the values and if so, replaces it. At the end I have an array of normal characters and converted HTML entities. I use join to put it back into a string and I am done after returning it.