// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toString().toLowerCase();

    let result = [];

    let decodeKey = [["a", "f", "l", "q", "v"], ["b", "g", "m", "r", "w"], ["c", "h", "n", "s", "x"], ["d", "i/j", "o", "t", "y"], ["e", "k", "p", "u", "z"]];

    let key = [["a", "f", "l", "q", "v"], ["b", "g", "m", "r", "w"], ["c", "h", "n", "s", "x"], ["d", "i", "o", "t", "y"], ["e", "k", "p", "u", "z"]];

    if(!encode) {

      let numOfSpace = 0;

      for(let i = 0; i < input.length; i++) {
        if(input[i] === " ") {
          numOfSpace++;
        }
      }
    
    let fullLength = input.length - numOfSpace;

    if(fullLength % 2 > 0) {
        return false;
      }

      for(let i = 0; i < input.length; i += 2) {
        
        if(input[i] === " ") {
          
        result.push(input[i]);
          
        i -= 1;
      }
   
        result.push(decodeKey[input[i] - 1][input[i + 1] - 1]);
      }
    } else {
      for(let i = 0; i < input.length; i++) {
        
      if(input[i] === " ") {
        
        result.push(input[i]);
        
      }
        
      if(input[i] === "j") {
        
          result.push(42);
        
      }
      for(let j = 0; j < key.length; j++) {
        
        if(key[j].includes(input[i])) {
          
          result.push(j + 1, key[j].indexOf(input[i]) + 1);
        }
      }
    }

    }
    
    
    
    return result.join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
