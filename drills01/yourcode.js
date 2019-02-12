
function sumArray(array){
    
    var total = 0;

    for (var index=0; index<array.length; index++) {
        total += array[index];
    }

    return total;
}

function fitWithinVal(array, num){

    var total = 0;
    var newArray = [];

    for (index=0; index<array.length; index++) {
        total += array[index]; 

        if (total <= num) {
            newArray.push(array[index]);
        } else {
            total -= array[index];
        }
    }

    return newArray;
}

function getAllNamesShorterThan(array, num){

    var newArray = [];

    for (index=0; index<array.length; index++) {
        if (array[index].length <= num) {
            newArray.push(array[index]);
        }
    }

    return newArray;
}

function makeLabel(personObj){

    var label = "";

    label += personObj.greeting+ " " +personObj.givenName+ " " +personObj.familyName+ "\n" +
        personObj["home address"].streetNumber+ " " +personObj["home address"].streetName+ "\n" +
        personObj["home address"].city+ ", " +personObj["home address"].state+ " " +personObj["home address"].zip;

    return label;

}



