function repeatConsonant(text) {
    var string = "",
        rex = /[^aeiou\d\W]/gi;

    for (var i = 0; i < text.length; i++) {
        if (text[i].match(rex)) {
            string += text[i];
            string += text[i];
        } else {
            string += text[i];
        }


    }

    return string;

}

console.log(repeatConsonant('String'));
console.log(repeatConsonant("Hello-World!"));
console.log(repeatConsonant("July 4th"));
console.log(repeatConsonant(""));
