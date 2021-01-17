    const alphabetChars = 'abcdefghijklmnopqrstuvwxyz';


    // need a checker to compare alphabet with alphabetChars.
function check(alphabet) {
    return [...alphabet].sort().join("") === [...alphabetChars].sort().join("");
}

function decryption(input, alphabet) {
    let final = "";
    // for loop to iterate through input
    for(let i = 0; i < input.length; i++) {
        // get the code # for the character
      const code = input.charCodeAt(i);
      // check if the code is in the alphabet portion of charCodes
      if (code > 96 && code < 123) {
          // if it is, get the index # of the letter in the alphabet given,
        let index = alphabet.indexOf(input[i]);
        // then go to that index value in alphabetChars and add that to the final.
        final += alphabetChars[index];
      } else {
          // if the charCode isn't within 96 and 123, then it's not a letter and can just be added to the final.
        final += input[i];
      }
    }
    return final;
};

function encryption(input, alphabet) {
    let output = "";
    // for loop to iterate through input
    for(let i = 0; i < input.length; i++) {
        // get the code # for the character
      const code = input.charCodeAt(i);
      // check if code is in the alphabet portion of charCodes
      if (code > 96 && code < 123) {
          // if it is, get the index # of the letter in the regular alphabet
        let index = alphabetChars.indexOf(input[i]);
        // then go to that index value in the given alphabet and add that to the final.
        output += alphabet[index];
      } else {
          // if the charCode isn't within the 96 and 123, then it's not a letter and can just be added to the final.
        output += input[i];
      }
    }
    return output;
}
    

// Use the subsitiution function to figure out which helper function to execute and receive the answer.
function substitution(input, alphabet, encode = true) {
  alphabet = alphabet.toLowerCase();
    if (alphabet.length !== 26 || !check(alphabet)) 
      return false;

      // if encode is false, you wanna use the decryption helper function.
    if(input && !encode) {
      return decryption(input.toLowerCase(), alphabet);
    }

    // if encode is true, you wanna use the encryption helper function.
    if (input && encode) {
      return encryption(input.toLowerCase(), alphabet);
    }
  }
  
module.exports = substitution;
