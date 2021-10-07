/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/


function uniteUnique(arr) {
  let args = Array.from(arguments)
  let result = [];

  for (let i = 0; i < args.length; i++) {
    result.push(args[i])
  }  
  result = result.flat()
  result = [...new Set(result)];

  console.log(result)
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//First it makes an array from the arguments structure. Then it makes an array of all arrays from the arguments and puts it into the result variable (the for loop). This is a two-dimensional array. Now this is flattened (converted to a one-dimensional array) and then a set is created which filters out duplicates.