// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25) {
      return false; 
    }

    let newWord = input.toLowerCase();

    let result = [];

    let key = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

      for(let i = 0; i < newWord.length; i++) {
      for(let j = 27; j < 54; j++) {
        if(!key.includes(newWord[i])) {
          result[i] = newWord[i]
        }
        if(newWord[i] === key[j] && !encode) {
          result[i] = key[j - shift];
        } else if(newWord[i] === key[j]) {
          result[i] = key[j + shift];
        }
      }
    }
    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
