function afterMidnight(time) {
    var arr = time.split(":"),
        mins = 0;
    mins = (arr[0] * 60) + Number(arr[1]);

    if (mins === 1440) {
        return 0;
    }
    return mins;
}

function beforeMidnight(time) {
    if (time === '00:00'){
      return 0;
    }else{
      return  60 * 24 - afterMidnight(time);
    }
}

console.log(beforeMidnight('12:34'));