//note: use index as a flag

function staggeredCaps(text) {
  
    var staggered = "",
        index = 0,
        rex = /[^a-z]/gi;

    for (var i = 0; i < text.length; i++) {

        if (text[i].match(rex)) {

            staggered += text[i];
           

        } else {

            if (index % 2 === 0) {
                staggered += text[i].toUpperCase();
                index++;
                
                
            } else if (index % 2 !== 0) {
                staggered += text[i].toLowerCase();
                index++;


            }
        }


    }

    return staggered;

}

console.log(staggeredCaps('I Love Launch School!'));
console.log(staggeredCaps('ALL_CAPS'));
console.log(staggeredCaps('ignore 77 the 444 numbers'));