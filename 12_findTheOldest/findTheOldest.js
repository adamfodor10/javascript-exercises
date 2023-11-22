const findTheOldest = function(array) {
    let age = [];
    array.forEach(item => {
        if (item.yearOfDeath === undefined) {
            item.yearOfDeath = new Date().getFullYear();
        }
        age.push(item.yearOfDeath - item.yearOfBirth)
    });

    let oldestAge = Math.max(...age);
    let indexOfOldest = age.findIndex(age => age === oldestAge );
    return array[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;