function invertNegatives(num){
    var result;

    if (typeof num!=="number"){
        result = false;
    } else {
        result = num*-1;
    }

    return result;
}

