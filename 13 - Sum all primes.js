/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

//I renamed num to limit so it's clearer

function sumPrimes(limit) {
  let nums = []
  for (let i = 2; i <= limit; i++) {
    nums.push(i)
  }
  let primes = []
  while (nums[0] < Math.sqrt(limit)) {
    primes.push(nums[0])
    nums = nums.filter(number => number % nums[0] !== 0)
  }
  primes = primes.concat(nums)
  return primes.reduce((a,b) => {return a+b}, 0)
}

console.log(sumPrimes(977))


/*
First, it defines a num array and fills it up with numbers from 2 (the first prime) to the limit. Then it defines an empty prime array. This algorithm uses the Sieve of Eratosthenes to calculate primes. It starts with the first number, assigns it as prime, then filters out all it's multiples. Then the second number, and this is done as long as the number to be assigned as prime is smaller than the square root of the limit. If it's not, we know that all the non-primes have been assigned or filtered out, so the rest of the nums array is just primes. All we have to do is join the two arrays and make their sums.
*/
