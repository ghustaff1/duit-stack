function evalRPN(tokens) {
  let stack = [];
  
  for (let token of tokens) {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
          let b = stack.pop();
          let a = stack.pop();
          if (token === '+') stack.push(a + b);
          else if (token === '-') stack.push(a - b);
          else if (token === '*') stack.push(a * b);
          else if (token === '/') stack.push(Math.trunc(a / b));  // Ділення з округленням до нуля
      } else {
          stack.push(Number(token));
      }
  }
  
  return stack.pop();
}

console.log(evalRPN(["2","1","+","3","*"])); // Виведе: 9
console.log(evalRPN(["4","13","5","/","+"])); // Виведе: 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Виведе: 22
