// Arrays
const MyArray = require("./src/array/array");
// Hastable
const Hashtable = require("./src/hashtable/hashtable");

// Arrays
// const myArray = new MyArray();
// myArray.push("Edilberto");
// myArray.push("Maria");
// myArray.push("Ana");
// console.log(myArray);
// myArray.pop();
// myArray.delete(1);
// myArray.shift();
// myArray.splice(3, "Juan");
// console.log(myArray);

// Hashtable
const myHashtable = new Hashtable(50);
myHashtable.set("Edilberto", 1998);
myHashtable.set("Diego", 1990);
myHashtable.set("Mariana", 1998);
console.log(myHashtable.getHashes());
myHashtable.delete("Mariana");
console.log(myHashtable.getHashes());
// console.log(myHashtable.get("Edilberto"));
