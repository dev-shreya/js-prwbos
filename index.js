// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastelem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastelem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      // ¸
      // }
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const arr = new MyArray();
arr.push('Hey There !');
arr.push('everyone!');
arr.push('e!');
arr.delete(2);
arr.push('you');
arr.push('we');
arr.push('one');
arr.delete(3);
console.log('Array', arr);
