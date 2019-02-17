function do_math(num1, num2, operator){

    var result;
    if (operator === "+"){
        result = num1+num2;
    } else if (operator === "-"){
        result = num1-num2;
    } else if (operator === "*"){
        result = num1*num2;
    } else if (operator === "/"){
        result = num1/num2;
    }

    return result;
}