// Arrays
const MyArray = require("./src/array/array");
// Hastable
const Hashtable = require("./src/hashtable/hashtable");
// Singly Linked List
const linkedList = require("./src/linkedlist/singlyLinkedList");
// Doubly Linked List
const Doubly = require("./src/linkedlist/doubly");

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
// const myHashtable = new Hashtable(50);
// myHashtable.set("Edilberto", 1998);
// myHashtable.set("Diego", 1990);
// myHashtable.set("Mariana", 1998);
// console.log(myHashtable.getHashes());
// myHashtable.delete("Mariana");
// console.log(myHashtable.getHashes());
// console.log(myHashtable.get("Edilberto"));

// Singly Linked List
// const mySinglelinkedList = new linkedList.Singlylinkedlist(0);
// mySinglelinkedList.append(1);
// mySinglelinkedList.append(2);
// mySinglelinkedList.append(3);
// mySinglelinkedList.append(4);
// mySinglelinkedList.prepend(50);
// mySinglelinkedList.insert(0, 100);
// console.log(mySinglelinkedList);
// mySinglelinkedList.delete(2);
// console.log(mySinglelinkedList);

// Doubly Linked List
const myDoubly = new Doubly(0);
myDoubly.append(1);
myDoubly.append(2);
myDoubly.append(3);

console.log(myDoubly);
