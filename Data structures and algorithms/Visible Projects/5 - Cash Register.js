/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let remainder = (cash - price)*100
  let result  = {}
  let coinSums = [
  [10000, cid[8][1]*100, "ONE HUNDRED"],
  [2000, cid[7][1]*100, "TWENTY"],
  [1000, cid[6][1]*100, "TEN"],
  [500, cid[5][1]*100, "FIVE"],
  [100, cid[4][1]*100, "ONE"],
  [25, cid[3][1]*100, "QUARTER"],
  [10, cid[2][1]*100, "DIME"],
  [5, cid[1][1]*100, "NICKEL"],
  [1, cid[0][1]*100, "PENNY"],
  ]

//Note - When I say coins, I mean both coins and bills

/* The remainder is the amount we owe the customer in cents. The coinSums variable is a 2D nested array. It stores the value of the coin in cents, the total number of money in that coin type (for example two quarters will be 50), and the name of the coin. I use this a central source of information to reference in the algorithm. I decided to do the math in cents and then divide it by a hundred at the end, it is easier and also faster than rounding it multiple times. Without it, there would be rounding errors (imagine 2-1 returning 1.000000000001, something like that.)
Also notice I didn't use const, I plan to use a while loop and change these variables from their initial state to their final state in multiple iterations.*/


let remainingCoinSums = coinSums.filter(coin => coin[0] <= remainder)
let remainingTotal = remainingCoinSums.map(arr => arr[1]).reduce((a, b) => a + b, 0)
if (remainder > remainingTotal) {
  return {status: "INSUFFICIENT_FUNDS", change: []}
  }

/* This is for the case that the register doesn't have the needed coins. Notice how I put it before the main algorithm, so if it's empty or something this is called before everything and time isn't wasted calculating the whole function. The remainingCoinSums variable holds only coins smaller than the remainder. The remaningTotal is a sum of all the money in remainingCoinSums. If the remainder is larger than the remainingTotal, there are insufficient funds. This is vital. Not only does this work if all the money in the register is less than what we owe the customer (test case 4), it also works if we have enough money but we can't give the exact amount of money back (test case 5).  */
//FYI - the map method creates an array of money amounts from each coin. Reduce adds all the numbers in the array together, so the cash in the register.

  while (remainder !== 0) {
    for (let i = 0; i < coinSums.length; i++) {
      if (remainder >= coinSums[i][0] && coinSums[i][1] !== 0) {
        remainder -= coinSums[i][0]
        coinSums[i][1] -= coinSums[i][0]
        if (result[coinSums[i][2]] == undefined) {
          result[coinSums[i][2]] = 0
        }
        result[coinSums[i][2]] += coinSums[i][0]
        break
      }
    }
  }

result = Object.entries(result)
result.map(coin => coin[1] = coin[1]/100)

/* This is the main algorhithm. The while loop iterates as long as remainder isn't 0. This can't be infinite, because we already checked for the insufficient funds case. The for loop inside goes from the largest coin to the smallest. When it finds one that isn't bigger than the entire remainder and is available (sum of the coins' value isn't zero) it subtracts the coin's value from remainder (to progress in stopping the while loop) and takes it away from coinSums to update the coins available to us. Then it adds the coins' value to the corresponding key of the result object. (keys in this case are names of coins). If there aren't any coins of that kind in the result object, it first has to be initialized (the last if statement)At the end, the result object is transformed to an 2D nested Array and everything is divided by a 100, so converted back to dollars from cents. This is now the final value of "change" which we return.*/



if (result.join("") == (cid.filter(coin => coin[1] != 0).join(""))) {
  return {status:"CLOSED", change:cid}
  }

return {status:"OPEN", change:result}

/*If we take all the money left in the register, it sets status to closed. You can't normally compare arrays but I used join() and since it's always formated like for example {"QUARTER":0.5} there can't be any issues like if you used join() on an array of numbers. If the status is neither "CLOSED" or "INSUFFICIENT FUNDS", the function runs all the way to the end and returns "OPEN" and the cash to give back.*/
}