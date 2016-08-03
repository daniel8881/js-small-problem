//fibonacci: 1,1,2,3,5,8,13

function fibonacci(n) {
    var first = 0,
        second = 1,
        f = 1;

    for (var i = 2; i <= n; i++) {
        f = first + second;
        first = second;
        second = f;
    }

    console.log(first);

}

fibonacci(5);