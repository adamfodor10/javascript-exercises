const removeFromArray = function(Array) {
    //console.log(Array);
    let index;
    for (let i = 0; i < arguments.length - 1; i++) {
        index = Array.indexOf(arguments[i + 1]);
        if (index === -1) {
            continue;
        }
        //console.log(Array.indexOf(arguments[i + 1]));
        Array.splice(index, 1);
        //console.log(Array);
    }
    return Array;
};

removeFromArray([11, 22, 33, 44], 44, 11);
//console.log(removeFromArray([1, 5, 3, 5], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;