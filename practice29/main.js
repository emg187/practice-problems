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
    } else {
        console.log("Invalid operation");
    }
    return result;
}


function do_math2(num1, num2, operator){

    var calcObj = {
        "+": function(num1, num2){
            return num1+num2;
        }, 
        "-": function(num1, num2){
            return num1-num2;
        },
        "*": function(num1, num2){
            return num1*num2;
        },
        "/": function(num1, num2){
            return num1/num2;
        }
    }

    calcObj["x"] = calcObj["X"] = calcObj["*"];
    return calcObj[operator](num1, num2);
}


