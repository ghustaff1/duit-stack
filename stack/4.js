class MyQueue {
  constructor() {
      this.stack1 = [];
      this.stack2 = [];
  }

  push(x) {
      this.stack1.push(x);
  }

  pop() {
      if (this.stack2.length === 0) {
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2.pop();
  }

  peek() {
      if (this.stack2.length === 0) {
          while (this.stack1.length > 0) {
              this.stack2.push(this.stack1.pop());
          }
      }
      return this.stack2[this.stack2.length - 1];
  }

  empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

let myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // Виведе: 1
console.log(myQueue.pop());  // Виведе: 1
console.log(myQueue.empty()); // Виведе: false
