function decodeString(s) {
  let stack = [];
  let currentString = '';
  let currentNum = 0;
  
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      if (char >= '0' && char <= '9') {
          currentNum = currentNum * 10 + (char - '0');
      } else if (char === '[') {
          stack.push({ str: currentString, num: currentNum });
          currentString = '';
          currentNum = 0;
      } else if (char === ']') {
          let { str, num } = stack.pop();
          currentString = str + currentString.repeat(num);
      } else {
          currentString += char;
      }
  }
  
  return currentString;
}

console.log(decodeString("3[a]2[bc]")); // Виведе: "aaabcbc"
console.log(decodeString("3[a2[c]]"));  // Виведе: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Виведе: "abcabccdcdcdef"
