function halvsies(array) {

    var len = array.length / 2;
    if (array.length % 2 !== 0) {
        len++;
    }
    var newArr = array.splice(len, len);
    console.log(newArr);
    console.log(array);

}


halvsies([1,2,3,4]);