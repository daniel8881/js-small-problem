function repeater(text) {
    var string = "";

    for (var i = 0; i < text.length; i++) {
        string += text[i];
        string += text[i];  
    }

    return string;
}

console.log(repeater('Hello'));
console.log(repeater("Good job!"));
console.log(repeater(''));