function reverse_words(string) {
    var arr = string.split(" ");
    var newArr = [];
    
    arr.forEach(function(item) {
        if (item.length > 5) {
            newArr.push(item.split("").reverse().join(""));
        } else {
            newArr.push(item);
        }
    });

    return newArr.join(" ");
}

console.log(reverse_words('Professional')); //lanoisseforP
console.log(reverse_words('Walk around the block')); //Walk dnuora the kcolb
console.log(reverse_words('Launch School')); //hcnuaL loohcS
