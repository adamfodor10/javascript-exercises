const repeatString = function(string, number) {
    let repeated = "";
    if (number >= 0) {
        for (let i = 0; i < number; i++) {
            repeated = repeated.concat(string);
        }
    } else {
        repeated = "ERROR";
    }
    return repeated;
};

console.log(repeatString("hey", -1));

// Do not edit below this line
module.exports = repeatString;
