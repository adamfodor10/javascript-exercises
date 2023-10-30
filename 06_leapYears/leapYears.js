const leapYears = function(year) {
    let isLeapYear;
    let modulo4 = year % 4;
    let modulo100 = year % 100;
    let modulo400 = year % 400;
    if (modulo4 === 0) {
        if (modulo100 === 0) {
            if (modulo400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear =false;
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;