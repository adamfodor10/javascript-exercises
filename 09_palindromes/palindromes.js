const palindromes = function (string) {
    string = string.toLowerCase();
    let onlyLettersArray = string.split('').filter(char => /[a-z]/.test(char));
    let reversedArray = onlyLettersArray.slice().reverse();
    return JSON.stringify(onlyLettersArray)===JSON.stringify(reversedArray);
};

// Do not edit below this line
module.exports = palindromes;