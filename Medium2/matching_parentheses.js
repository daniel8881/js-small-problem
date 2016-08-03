var balanced = text => {
    var parens = 0,
        text_arr = text.split("");

    for (var i = 0; i < text.length; i++) {
        if (text_arr[i].match(/[(]/g)) {
            parens += 1;
        }
        if (text_arr[i].match(/[)]/g)) {
            parens -= 1;
        }
        if (parens < 0) {
            return false;
        }
    }




    return parens === 0;

}

console.log(balanced('What ((is))) up('));