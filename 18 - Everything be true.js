/*
Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/



for (let i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {return false}
  }
  return true



//It is a very short algorhithm. For every object in the collection it checks, if the [pre] value of the object is falsy. If so it returns false. If not, the loop goes until it ends and true is returned.