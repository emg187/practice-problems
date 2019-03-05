function groupArray(arr){
    var numberArray = [];
    var stringArray = [];
    var boolArray = [];
    var nullArray = [];
    var undefinedArray = [];
    var arrayArray = [];
    var objectArray = [];

    var result = [];

    for (var index=0; index<arr.length; index++){
        if (Array.isArray(arr[index])){
            arrayArray.push(arr[index]);
        } else if (arr[index===null]){
            nullArray.push(arr[index]);
        } else {
            switch (typeof arr[index]){
                case "number":
                    numberArray.push(arr[index]);
                    break;
                case "string":
                    stringArray.push(arr[index]);
                    break;
                case "boolean":
                    boolArray.push(arr[index]);
                    break;
                case "undefined":
                    undefinedArray.push(arr[index]);
                    break;
                case "object":
                    objectArray.push(arr[index]);
                    break;
                default: 
                    break;
            }
        }
    }
    result.push(numberArray);
    result.push(stringArray);
    result.push(boolArray);
    result.push(nullArray);
    result.push(undefinedArray);
    result.push(arrayArray);
    result.push(objectArray);

    return result;
}