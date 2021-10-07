/*
Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/



function binaryAgent(str) {
  let binary = str.split(" ")
  let decimal = []
  for (let i = 0; i < binary.length; i++) {
    decimal.push(
      parseInt(binary[i][0] * 128) + 
      parseInt(binary[i][1] * 64) +
      parseInt(binary[i][2] * 32) +
      parseInt(binary[i][3] * 16) +
      parseInt(binary[i][4] * 8) +
      parseInt(binary[i][5] * 4) +
      parseInt(binary[i][6] * 2) +
      parseInt(binary[i][7] * 1)
    )
  }

  let text = decimal.map(decimalLetter => String.fromCharCode(decimalLetter)).join("")

  console.log(text)
  return text;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
First it converts the input into an array of "8 binary numbers long" chunks. These are the individual letters. It is then converted to decimal using a for loop. For every chunk, it accesses that chunks binary numbers. It multiplies them each with the correct multiple of two and adds all of these decimal numbers created from binary numbers together. What we have is an array of decimal numbers. Then using map, each item in the array, so each decimal number, is converted to a letter using fromCharCode. Now it's an array of letters and spaces so all we have to do is use join and we have plaintext english in the text variable.
*/
