/*
Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/


function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
 
  return arr.map(elem => ({name: elem.name, 
  orbitalPeriod: Math.round(2*Math.PI * Math.sqrt(Math.pow(earthRadius+elem.avgAlt, 3)/GM))}))
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/*
Looks very complicated but really isn't. The array of objects is mapped into another array of objects where instead of avgAlt, there is an orbitalPeriod key. The orbitalPeriod is calculated by the formula found on wikipedia.  2π * sqrt((a*a*a)/GM)
Two pi times the square root of 'a' cubed over GM
This is then rounded and we have the desired value. I used map instead of a for loop because it is more compact and actually simpler even, though it looks weirder.
*/