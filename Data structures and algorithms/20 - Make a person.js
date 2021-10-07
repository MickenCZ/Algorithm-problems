/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/


let Person = function(firstAndLast) {
  this.getFullName = () => {return firstAndLast}
  this.getFirstName = () => {return firstAndLast.split(" ")[0]}
  this.getLastName = () => {return firstAndLast.split(" ")[1]}
  this.setFullName = (fullName) => {firstAndLast = fullName}
  this.setFirstName = (firstName) => {
    firstAndLast = firstAndLast.split(" ")
    firstAndLast[0] = firstName
    firstAndLast = firstAndLast.join(" ")
    }
  this.setLastName = (lastName) => {
    firstAndLast = firstAndLast.split(" ")
    firstAndLast[1] = lastName
    firstAndLast = firstAndLast.join(" ")
    }
}

let bob = new Person('Bob Ross')


//Nothing special. I decided to use ES6 syntax to make it more compact and readable. Nothing to explain except maybe the setfirstname and setlastname methods. It makes an array of a firstname and lastname, changes the firstname/lastname as desired and then puts it back together as a string. 