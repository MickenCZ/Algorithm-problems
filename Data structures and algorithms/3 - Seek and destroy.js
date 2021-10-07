/*
Seek and DestroyPassed
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/


function destroyer(arr) {
  let args = Array.from(arguments).slice(1)

  for (let i = 0; i < args.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] == args[i]) {
        delete arr[x]
      }
    }
  }
  arr = arr.filter(item => item != undefined)
  console.log(arr)
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//First it makes an array out of args, then it only saves the extra ones (all except first) to a variable. Then for every argument in that variable it remembers its value and deletes (undefines) every item in arr that has that value. Then it just filters out undefined items and we have the result.