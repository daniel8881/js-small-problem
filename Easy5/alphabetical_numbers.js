function alphabeticalNumber(array) {
    var letter = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'night',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    var newArr = [];
    array.forEach(function(value) {
        newArr.push(letter[value]);
    });

    newArr.sort();
    var final = newArr.map(function(value) {
        return letter.indexOf(value);
    });

    console.log(final);
}


alphabeticalNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);