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
    switch (str[i]) {
      case "G":
        result.push(["G", "C"])
        break
      case "C":
        result.push(["C", "G"])
        break
      case "A":
        result.push(["A", "T"])
        break
      case "T":
        result.push(["T", "A"])
        break
    }
  }

  console.log(result)
  return result;
}

pairElement("GCG");

//Just uses a switch statement to push arrays onto the result variable.
