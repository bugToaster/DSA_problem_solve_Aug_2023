class MinStack {
  constructor() {
    this.mainStack = []; // Stack to hold the actual values
    this.minStack = [];  // Stack to hold the minimum values
  }

  pushItem(value) {
    this.mainStack.push(value);

    // Update the minStack with the new minimum value
    if (!this.minStack.length || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  popItem() {
    if (!this.mainStack.length) {
      return null;
    }

    const poppedValue = this.mainStack.pop();

    // If the popped value is the current minimum, remove it from minStack
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return poppedValue;
  }


  minItem() {
    if (!this.minStack.length) {
      return null;
    }
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const stack = new MinStack();

stack.pushItem(7);
stack.pushItem(5);
stack.pushItem(4);
stack.pushItem(3);

console.log(stack.minItem()); // Output: 2

stack.popItem();
stack.popItem();

console.log(stack.minItem()); // Output: 3
