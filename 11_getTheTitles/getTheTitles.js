const getTheTitles = function(array) {
    let titles = [];
    array.forEach(item => {
        titles.push(item.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;