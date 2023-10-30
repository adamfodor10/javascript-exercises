const sumAll = function(number1, number2) {
    let sumAll = 0;
    if (typeof number1 === "number" && typeof number2 === "number") {
        if (number1 >= 0 && number2 >= 0) {
            if (number1 < number2) {
                while (number1 <= number2) {
                    sumAll += number1;
                    number1++;
                }
            } else {
                while (number1 >= number2) {
                    sumAll += number2;
                    number2++;
                }
            }
        } else {
            sumAll = "ERROR";
        }
    } else {
        sumAll = "ERROR";
    }
    return sumAll;
};

sumAll(8, 10);

// Do not edit below this line
module.exports = sumAll;