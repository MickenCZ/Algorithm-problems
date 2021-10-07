/*
Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/


function dropElements(arr, func) {

  let i = 0
  while (func(arr[i]) != true && arr.length != 0) {
    arr.shift()
  }

  console.log(arr)
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });


//The while loop looks at the first value of the array and applies the supplied function. If this isn't true and the array isn't empty, it removes the first element. If it is true, the while loop is stopped and we still have the rest of the array