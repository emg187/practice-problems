function cocococombomath(num1, num2, num3, num4, num5){
    var ops = ['*','+','/','-'];
    var result = arguments[0];
    for( var i = 1; i < arguments.length; i++){
        result = do_math(result, arguments[i], ops[i])
    }
    var product = num1*num2;
    var sum = product+num3;
    var quotient = sum/num4;
    var difference = quotient-num5;
    return difference;
}

function combomath2(){

    var ops = ["*", "+", "/", "-"];
    var result = arguments[0];

    var opsIndex = 0;
    for (var index=1; index<arguments.length; index++){
        result = do_math2(result, arguments[i], ops[opsIndex]);
        opsIndex++;
    }

    return result;
}



