function isValid(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === '(' || c === '{' || c === '[') {
          stack.push(c);
      } else {
          if (stack.length === 0) return false;
          let top = stack.pop();
          if (c === ')' && top !== '(' || c === '}' && top !== '{' || c === ']' && top !== '[') {
              return false;
          }
      }
  }
  return stack.length === 0;
}
