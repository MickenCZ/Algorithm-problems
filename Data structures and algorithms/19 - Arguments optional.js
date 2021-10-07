/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/



function addTogether(a, b) {

  if (arguments.length === 2 && Number.isInteger(a) && Number.isInteger(b)) {
    return a + b
  }
  else if (arguments.length === 1 && Number.isInteger(a)) {
    return function addAnother(adder) {
      if (Number.isInteger(adder)) {return a + adder}
      else {return undefined}
    
    }
  }
  else {return undefined}
}


/*
This was a hard one especially since I had a bug in the conditional with one argument and the last test confused me so much. If there are two arguments supplied, it checks if they are both numbers and returns their sum. If there are two arguments but one of them isn't a number, it returns undefined. If there is one argument, and it is a number, it returns a function that takes one argument, checks if it's a number and then adds it to "a", which is the first argument of the addTogether function. If it's not a number it returns undefined. In practice it just returns a function for which you can supply a parameter and it will add it to the intial one. If the number of arguments isn't one or two, it returns undefined.
*/