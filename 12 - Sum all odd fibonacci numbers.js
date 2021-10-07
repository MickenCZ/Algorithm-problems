/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/



function sumFibs(num) {
  if (num == 1) {return 1}
  let fibs = [1,1]
  let i = 0

  while (true) {
    if (fibs[i+1] + fibs[i] <= num) {
      fibs.push(fibs[i+1] + fibs[i])
    }
    else {break}
    i++
  }


  fibs = fibs.filter(num => num % 2 != 0)
  let result = fibs.reduce((a, b) => a + b, 0)

  console.log(result)
  return result;
}

sumFibs(4);


//First, if the num is 1, we can just return 1 because we don't need to do any calculations. Not having this clause could break the code. Then we set default first two values for the fibonacci and initialize i for our while loop. The while loop pushes fibonacci numbers into fibs as long as they are smaller or equal than the num which limits them. If it's bigger, the loop stops. Now we have all needed fibonacci numbers in an array called fibs. We use filter and only keep numbers not divisible by two (so odd numbers). Then we use reduce to add all numbers in the array and we are done.