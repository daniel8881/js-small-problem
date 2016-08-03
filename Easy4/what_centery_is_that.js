function century(year) {
    var century = Math.ceil(year / 100);
    var digit = century % 10;
    var digit2 = century % 100;

    if (digit === 1 && digit2 !== 11) {
        return century + "st";

    } else if (digit === 2 && digit2 !== 12) {
        return century + "nd";

    } else if (digit === 3 && digit2 !== 13) {
        return century + "rd";
        
    } else {
        return century + "th";
    }

}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));