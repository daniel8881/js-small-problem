//把每一位數變成個位
//然後 % 10 求出數目，換成string相加

function intergerToString(number) {

    var sign = "";

    if (number < 0) {
        sign = "-";
        number = -number;
    } else if (number === 0) {
        return sign
    }


    var digis = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        i = 0,
        string = "";

    for (i; Math.floor(number / Math.pow(10, i)) > 0; i++) {
        string = digis[Math.floor(number / Math.pow(10, i)) % 10] + string;
        console.log(string);
        
    }

    if (!string) {
        string = '0';
    }

    return sign + string;
}

console.log(intergerToString(4321));
//console.log(intergerToString(-123));
//console.log(intergerToString(0));