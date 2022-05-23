// Task 1

let a = 3;
let b = 5;
let c;
let result = 'let a = 3;';
result += '\nlet b = 5;';
result += '\nlet c;';
result += '\n---------';
result += `\na + b = ${a + b}`;
result += `\na - b = ${a - b}`;
result += `\na * b = ${a * b}`;
result += `\na / b = ${a / b}`;
result += `\na % b = ${a % b}`;
result += `\n(a += b): ${a += b}`;
result += `\n(a -= b): ${a -= b}`;
result += `\n(a *= b): ${a *= b}`;
result += `\n(a /= b): ${a /= b}`;
result += `\n(a %= b): ${a %= b}`;
result += `\n(a == b): ${a == b}`;
result += `\n(a != b): ${a != b}`;
result += `\n(a > b): ${a > b}`;
result += `\n(a < b): ${a < b}`;
result += `\n(!a && !c): ${!a && !c}`;
result += `\n(!a || !c): ${!a || !c}`;

alert(result);


// Task 2

let first_name = 'Hemansh';
let last_name = 'Bhatia';
let email = 'hema0009@algonquinlive.com';
let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`

alert(output);