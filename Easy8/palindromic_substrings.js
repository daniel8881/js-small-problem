function palindromes(text) {
    var arr = [];

    for (var i = 0; i < text.length; i++) {
        for (var l = 0; l < text.length; l++) {
            if (text.slice(i, l + 1)) {
                arr.push(text.slice(i, l + 1));
            }

        }
    }

    var newArr = [];

    arr.forEach(function(item) {
        var newItem = item.split("").reverse().join("");
        if (item.length >= 2) {
            if (newItem === item) {
                newArr.push(item);
            }
        }

    });

    return newArr;
}


console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));