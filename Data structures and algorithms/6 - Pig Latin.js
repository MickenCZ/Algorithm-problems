/*
Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/




function isVowel(letter) {
  return (/^[aeiou]$/i).test(letter)
}

function translatePigLatin(str) {
  if (isVowel(str[0])) {
    str = str + "way"
  }


  else {
    let startingConsonants = ""
    for (let i = 0; i < str.length; i++) {
      if (isVowel(str[i]) === false) {
        startingConsonants = startingConsonants + str[i]
      }
      else {break}
    }


  if (startingConsonants !== str) {
    str = str.slice(startingConsonants.length, str.length) +        startingConsonants + "ay"}
  else {str = str + "ay"}
  }

  console.log(str)
  return str;
}

translatePigLatin("consonant");





/*
//First I defined a function that uses regex to check if a string contains at least one vowel. The i is there so it is case insensitive. I am going to be checking for vowel/consonant a lot so this saves a lot of space. For the actual translator, it checks if it begins with a vowel and if so, just adds way to the end and changes str. If not, the program diverges once more. It generates a string of consonants that stand before the first vowel. If there is no vowel, it just sets itself to str. If str and the consonant array are the same, it just returns str with "ay" at the end. If not, then it makes the new string by putting together str without the intial consonants, the consonants and "ay".
*/