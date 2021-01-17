function caesar(input, shift, encode = true) {
    // input refers to inputted text to be encoded or decoded
    // shift refers to how much each letter is shifted. + number means to the right, - to left.
    // encode refers to whether you should encode or decode. Default = true.
// Create the abcs so we can compare each element of the input and see what letters are near it in the alphabet.
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 
    's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z'];
    let lowerCaseInput = input.toLowerCase();
    let finalString = '';
    if (shift === 0 || shift < -25 || shift > 25 || shift === null || shift === undefined) {
        return false;
    } else {
if (encode === true) {
    for (let i = 0; i < lowerCaseInput.length; i++) {
        let currentLetter = lowerCaseInput[i];
        if (alphabet.includes(currentLetter) === false) {
            finalString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + shift;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (input[i] === input[i].toUpperCase()) {
        finalString += alphabet[newIndex].toUpperCase();
    }
    else finalString += alphabet[newIndex];
}
} else {
    for (let i = 0; i < lowerCaseInput.length; i++) {
        let currentLetter = lowerCaseInput[i];
        if (alphabet.includes(currentLetter) === false) {
            finalString += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex - shift;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (input[i] === input[i].toUpperCase()) {
        finalString += alphabet[newIndex].toUpperCase();
    }
    else finalString += alphabet[newIndex];
}
}
    return finalString.toLowerCase();
}
}
module.exports = caesar;
