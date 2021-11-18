/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/


function destroyer(arr) {
  let args = Array.from(arguments).slice(1)

  for (let i = 0; i < args.length; i++) {
    arr = arr.filter(item => item !== args[i])
  }

  console.log(arr)
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//First it makes an array out of arguments, then for each arg, it filters it out of the arr parameter.
