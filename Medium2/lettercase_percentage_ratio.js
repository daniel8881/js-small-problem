

var letterRatio = text => {

    var upper_count = (text.match(/[a-z]/g)),
        lower_count = (text.match(/[a-z]/g)),
        upper_rate = 0,
        lower_rate = 0;

    
    if(!upper_count && !lower_count){
     

      upper_rate = 0;
      lower_rate = 0;
    }else if(!lower_count){

      upper_rate = upper_count.length / text.length * 100;
      lower_rate = 0;
    }else if(!upper_count){
      upper_rate = 0;
      lower_rate = lower_count.length / text.length * 100;
    }else{

      upper_rate = upper_count.length / text.length * 100;
      lower_rate = lower_count.length / text.length * 100;
    }

    var other_rate = 100 - upper_rate - lower_rate;
    

    var result = {};

    result.lowercase = lower_rate;
    result.uppercase = upper_rate;
    result.neither = other_rate;

    return result;

}

console.log(letterRatio('abCdef 123'));
console.log(letterRatio('AbCd +Ef'));
console.log(letterRatio('123'));