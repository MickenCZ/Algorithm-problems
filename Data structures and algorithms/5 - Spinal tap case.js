/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str = str.replace(/\W*[ _]/g, "-" )
  for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() 
      && str[i] !== str[i].toLowerCase()
      && i!= 0 
      && str[i-1] !== "-")
      {
        str = str.slice(0, i) + "-" + str.slice(i, str.length)
      }
    }
  str = str.toLowerCase()

  console.log(str)
  return str;
}
spinalCase('AllThe-small Things');

/*
Using Regex, it first replaces all non word characters except underscores and spaces with dashes. The underscores and spaces have to be individual, because \W doesnt work on them. That's why they are in brackets in addition to the non-word characters. Now it's just normal sentences and camelCase. The for loop checks for every letter, if it is uppercase and isnt lowercase (cant only check for if its uppercase, the dashes would also be uppercase which would break the code), then it checks if the last character was a dash (so if its a camelCase character that needs an extra dash) and also checks if its the first iteration, because we don't want to run into negative indeces. If all these conditions are met, it injects a dash at index i. What this does is convert camelCase to normal text. Then all I had to do is convert the entire string to lowercase.
*/