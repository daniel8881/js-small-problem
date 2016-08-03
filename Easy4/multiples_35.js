function multisum(number) {
    var total = 0;
    for (var i = 0; i <= number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));