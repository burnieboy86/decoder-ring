// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    
    let result = [];
    
    let key = [];
    
    let normalAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    if(!alphabet) {
      return false;
    }
    
    if(alphabet.length != 26) {
      return false;
    }
    
    for(let i = 0; i < alphabet.length; i++) {
      key.push(alphabet[i]);
    }
    
    for(let i = 0; i < key.length; i++) {
      for(let j = i + 1; j < key.length; j++) {
        if(key[i] === key[j]) {
          return false;
        }
      }
    }
    
    if(!encode) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] === ' ') {
            result.push(input[i]);
          }
        for(let j = 0; j < key.length; j++) {
          if(input[i] === key[j]) {
            result.push(normalAlphabet[j]);
          }
        }
      }
    } else {
      for(let i = 0; i < input.length; i++) {
        if(input[i] === ' ') {
            result.push(input[i]);
          }
        for(let j = 0; j < normalAlphabet.length; j++) {
          if(input[i] === normalAlphabet[j]) {
            result.push(key[j]);
          }
        }
      }
    }
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
