/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let smaller;
  let bigger;
  let result = 0;
  if (arr[1] > arr[0]) {smaller = arr[0]; bigger = arr[1]}
  else {smaller = arr[1]; bigger = arr[0]}


  for (let i = smaller; i < bigger + 1; i++) {
    result += i
  }
  console.log(result)
  return result;
}

sumAll([1, 4]);



//First it looks for the bigger number, than it adds all numbers between small and bigger to result