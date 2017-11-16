//for refactoring use better naming password->password, result->result
//use switch statement rather then else if
//split into two functions obfuscate -> ovfuscateLetter password ->letter
function obfuscateLetter(letter) {
  switch (letter) {
    case 'a' : return '4';
    case 'e' : return '3';
    case 'o' : return '0';
    case 'l' : return '1';
    default  : return letter;
  }

}
function obfuscate(password) {
  var result="";
  for (let i = 0; i < password.length; i++) {
    result += obfuscateLetter(password[i]);
  }
  return result;
}

console.log(obfuscate(process.argv[2]));