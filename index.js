const MyArray = require("./DataStructures/MyArray.js");

const myArray = new MyArray();

myArray.push("Edilberto");
myArray.push("Maria");
myArray.push("Ana");
console.log(myArray);
// myArray.pop();
// myArray.delete(1);
// myArray.shift();
myArray.splice(3, "Juan");
console.log(myArray);
