function polybius(input, encode = true) {
    const table = {11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'};
 
    input = input.toLowerCase();
    let final = '';
    if (typeof input !== "string") return false;
    if (encode) {

// iterate through the input and check if the letter is a space or i or j since they are special properties.
        for (values in input) {
            const letter = input[values];
            // if the letter is a space, then add the space.
            if (letter === ' ') {
                final += letter
                continue
            }
            // if the letter is i or j, you need to add 42 to the final
            if (letter === 'i' || letter === 'j') {
                final += 42
                continue
            }
            // then iterate through each value in the table
            for (value in table) {
                // if the letter is equal to the key: 'value', then add the key value to the final.
                if (letter === table[value]) {
                    final += value
                }
            }
        }
    } else {

        // iterate through each number in the input
    for (numbers in input) {
        // make pairs
        let pairs = input.split(' ');
        // for each element in the pairs, check if it's even, if it isn't return false.
        for (element in pairs) {
            if (pairs[element].length % 2 != 0) {
                return false;
            }
        }
        // make a full pair and compare
        const pair = `${input[0]}${input[1]}`;
        if (input[0] === ' ') {
            final += input[0];
            input = input.slice(1);
            continue;
        }
        for (num in table) {
            if (pair === num) {
                final += table[num]
            }
        }
        input = input.slice(2);
    }
}
return final;
}

   
module.exports = polybius;
