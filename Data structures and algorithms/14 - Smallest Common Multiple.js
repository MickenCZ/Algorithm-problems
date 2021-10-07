/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/


function smallestCommons(arr) {
  let smaller, bigger
  if (arr[0] > arr[1]) {smaller = arr[1]; bigger = arr[0]}
  else {smaller = arr[0]; bigger = arr[1]}

  let range = []
  for (let i = smaller; i <= bigger; i++) {
    range.push(i)
  }

function findGCD(a, b) {
  while (b!==0) {
    let remainder = a % b
    a = b
    b = remainder
  }
  return a
} 

function findLCM(a, b) {
  return (a*b)/findGCD(a,b)
}



let result = range.reduce(findLCM)

  return result;
}


smallestCommons([23,18]);

/*
Looks complicated but really isn't. First it assigns the bigger number to the bigger variable and the smaller to the smaller variable. Then it generates a range of numbers, which are the numbers in trying to find the LCM of. Then I define a function to calculate GCD (https://en.wikipedia.org/wiki/Euclidean_algorithm) and a function to generate LCM from GCD   https://math.libretexts.org/Courses/Mount_Royal_University/MATH_2150%3A_Higher_Arithmetic/4%3A_Greatest_Common_Divisor_least_common_multiple_and_Euclidean_Algorithm/4.3%3A_Least_Common_Multiple Then i reduced the range array which finds the LCM of a pair of numbers and then finds the LCM of the result and the next number and so on. It is saved in a result variable which is our result. Very surprised this ran on the first try, kinda proud of that one. Also this is proof that math is useful in programming.
*/