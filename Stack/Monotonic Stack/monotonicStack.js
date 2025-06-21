class MonotonicStack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // Maintain Increasing Order
    while (!this.isEmpty() && this.peek() > element) {
      this.pop();
    }
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items.toString());
  }
}

// Example: Next Greater Element
const findNextGreaterElement = (arr) => {
  const stack = new MonotonicStack();
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
};

const arr = [4, 5, 2, 10, 8];
console.log("Next Greater Element: ", findNextGreaterElement(arr));
