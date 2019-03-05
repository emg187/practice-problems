function arrayReverse(arr){
    var result = [];
    for (var index=arr.length-1; index>=0; index--){
        result.push(arr[index]);
    }
    return result;
}

