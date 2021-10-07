/*
Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {
  let arr = [];
  let keys = Object.keys(source)
  
  arr = collection.filter(
    (art) => {
      for (let i = 0; i < keys.length; i++) {
        if (art.hasOwnProperty(keys[i]) === false || art[keys[i]] !== source[keys[i]]) {
          return false
        }
      }
      return true
    }
  )
  
  console.log(arr)
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



/*While it might look simple, I would say this was the hardest problem for me, even though the solution isn't that complicated. I make an arr variable for the result and save the keys of the source into a variable aswell. In this example, keys is ['last']. Since I am returning an array with matching pairs from an array containing everything, using filter is a no brainer. The way it works is that if it returns true or a condition that is true, it is saved. If it returns false or a condition that is false, it gets filtered and thrown away. I use an arrow function with a parameter of art (individual objects in the collection). For every object in the source, I check if art (the collection object we are looking at using the filter loop) has the same property as keys and also if it has the same property, like 'Montague'. If either of these aren't true, it returns false, this iteration of filter stops and it throws this collection object away. If they are both true, it get's down to the return true and it is kept and saved into arr. After everything is done, I just returned arr.*/