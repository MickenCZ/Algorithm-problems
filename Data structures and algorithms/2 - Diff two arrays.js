/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  let newArr = [];
  let bigArr = arr1.concat(arr2)
  for (let i = 0; i < bigArr.length; i++) {
    if ((arr1.includes(bigArr[i]) && arr2.includes(bigArr[i])==false)|| (arr2.includes(bigArr[i]) && arr1.includes(bigArr[i])==false)) {
      newArr.push(bigArr[i])
    }
  }

  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//It makes a big array containing all elements of both arrays. For all elements in that big array it checks if that element is included in one array but not the other and if so, it pushes it to the newArr array which is the result