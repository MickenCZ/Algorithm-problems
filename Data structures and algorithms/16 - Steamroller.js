/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/



function steamrollArray(arr) {
 let result = []

 for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     result.push(...steamrollArray(arr[i]))
   }
   else {
     result.push(arr[i])
   }
 }
  return result
}
steamrollArray([1, [2], [[3, 4]]]);


/*
Definitely one of the harder problems. Not only do I have to figure out an algorhithm to flatten 1 depth of an array I also need to implement it in such a way that I can recursively repeat it. I started by making an empty result array, as it will be easier than modifying the original arr. For every item in the main arr array I check if the item is an array. If not, I push it to our results, as it is just a value. If so, I execute this very same function again but on the subarray. Very important to use ... (the spread operator), so the array is expanded. At the end of the function I return the result. Let me explain the recursion more concretely. If I have an array of depth two, it finds that array and goes to the top of the function, but now with the subarray arr[i]. There it finds no other arrays, so it just returns the contents of this subarray. Now back to the main function, it pushes the contents of the subarray to the result array (which is final in this case) and also pushes other non-array elements there. For this example, a parameter that looks like [[1,2], 2, 3, 4] would work. Look at it while you read the explanation.
*/