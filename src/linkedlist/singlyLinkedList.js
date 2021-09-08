class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Singlylinkedlist {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index - 1) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    } else {
      const newNode = new Node(value);
      const firtstPointer = this.getTheIndex(index);
      const holdingPointer = firtstPointer.next;
      firtstPointer.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this;
    }
  }

  delete(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index >= this.length) {
      console.log(`The index ${index} does not exist`);
    } else {
      const firtstPointer = this.getTheIndex(index);
      const holdingPointer = firtstPointer.next;
      firtstPointer.next = holdingPointer.next;
      this.length--;
    }
  }

  showvalues() {
    let counter = 0;
    currentNode = this.head;
    while (counter !== this.length - 1) {
      console.log(`${currentNode} -> ${currentNode.next}`);
      currentNode = currentNode.next;
      counter++;
    }
  }
}

module.exports = { Singlylinkedlist: Singlylinkedlist, Node: Node };
