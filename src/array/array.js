class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // obtener elemento del array mediante un index
  get(index) {
    return this.data[index];
  }
  // agregar un item al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  // eliminar el ultimo elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // eliminar un elemento del array
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  // agregar un elemento al array
  unshift(item) {
    this.unshiftIndex(item);
    return this.data;
  }
  unshiftIndex(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
  // eliminar el primer elemento del array
  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.length--;
    return firstItem;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // agregar un elemento al array
  splice(index, intem) {
    this.spliceIndex(index, intem);
    return this.data;
  }
  spliceIndex(index, item) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
  }
}

module.exports = MyArray;
