/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      result.push(["G", "C"])
    }
    else if (str[i] == "C") {
      result.push(["C", "G"])
    }
     else if (str[i] == "A") {
      result.push(["A", "T"])
    }
     else if (str[i] == "T") {
      result.push(["T", "A"])
    }
  }

  console.log(result)
  return result;
}

pairElement("GCG");

//Just uses if statements to manually push letter pairs in an array to the result. A case and switch statement or a look-up object might have been better, I did it this way because it's faster for me to type and think and also it's very readable even for people who only know basic syntax.