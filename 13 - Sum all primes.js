/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  Array.prototype.removeMultiples = function(multiple) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] % multiple == 0) {
        delete this[i]
      }
    }
    return this
  }

  let numsInRange = []
  for (let i = 2; i <= num; i++) {
    numsInRange.push(i)
  }
  let primes = []

  for (let x = 0; x < numsInRange.length; x++) {
    primes.push(numsInRange[x])
    if (numsInRange[x] < Math.sqrt(num)) {numsInRange.removeMultiples(numsInRange[x])}
  }

   let result = primes.filter(function( element ) {
   return element !== undefined;
})

  result = result.reduce((a,b)=>a+b)
  console.log(result)
  
  return result;
}

sumPrimes(977);



//Before I start, I know this can be solved quicker and with shorter code using boolean values and a loop that increments a multiple and deletes it instead of checking for each one like I did with my function. It is perhaps what I would do in a real situation but I would just copy the code from someone else. In this case, I wanted to produce something truly mine and made from scratch and this is what I came up with.
//First I define a function that checks for multiples and replaces them with empty items in the array (so order and indexes are kept). Again, incrementing by the multiple and using booleans is faster but I am doing it this way. Then I make an array of all numbers between 2 and n and an empty arrray for the primes. Then it uses the sieve of Eratosthenes to generate primes. It takes a number, moves it from numsInRange to primes and then removes all it's multiples. This is repeated until sqrt(num), where all numbers that follow are primes. The rest of the code just deletes all the holes in the array and uses reduce to add it up together.