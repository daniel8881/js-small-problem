function swapCase(text) {

    var textArr = text.split("");
    console.log(textArr);

    var newArr = textArr.map(function(item) {
        if (item.match(/[a-z]/)) {
            return item.toUpperCase();
        } else if (item.match(/[A-Z]/)) {
            return item.toLowerCase();
        } else {
            return item;
        }
    });

    return newArr.join("");
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));