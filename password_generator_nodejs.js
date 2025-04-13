const readline = require('readline');
let password = "";
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", '"', ",", ".", "<", ">", "?", "/", "~", "`"];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the Length of the Password: ", (len) => {
  if (int(len)):
    len = int(len);
  else:
    break;
  while (len >= i) {
    password += characters[Math.floor(Math.random() * characters.length)];
    i++;
  };
});
print(password)
