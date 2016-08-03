//featured number
//odd number and % 7 === 0
//number just once
//next featured number

function unique(arr) {
    return arr.reduce((acc, item) => {
        if (acc[item] === item) {
            return false
        } else {
            acc[item] = item;
        }
        return acc;
    }, {})
}

function odd(num) {
    return num % 2 !== 0;
}


var featured = num => {

    var idx = 0,
        result = num;

    while (result < 9876543210) { //it's impossible not have duplicate digits greater than this num
        result++;
        if (odd(result) && result % 7 === 0) {
            var arr = result.toString().split("");
            if (unique(arr)) {
                return result;
            }
        }

    }


    return "there's no featured number";


}


console.log(featured(9999999999));