

function countOccurences(array, word){

    var total = 0;
    for (var arrayIndex=0; arrayIndex<array.length; arrayIndex++) {
        if (array[arrayIndex] === word) {
            total++;
        }
    }
    
    return total;
}

function wordLengths(array){

    var newArray = [];
    for (var arrayIndex=0; arrayIndex<array.length; arrayIndex++) {
        var wordLength = array[arrayIndex].length;
        newArray.push(wordLength);
    }

    return newArray;
}

function getMinMaxMean(array){

    var resultObj = {};
    min = array[0];
    max = array[0];
    mean = array[0];
    for (var arrayIndex=1; arrayIndex<array.length; arrayIndex++) {

        if (array[arrayIndex]<min) {
            min = array[arrayIndex];
        }
        if (array[arrayIndex]>max) {
            max = array[arrayIndex];
        }

        mean+=array[arrayIndex];
    }

    mean/=(array.length);
    resultObj["min"] = min;
    resultObj["max"] = max;
    resultObj["mean"] = mean;

    return resultObj;
}

function findMode(array){

    var mode;

    for (var arrayIndex=0; arrayIndex<array.length; arrayIndex++) {
        mode = array[arrayIndex];
        var modeAppearances;

        for (var counter=0; counter<array.length; counter++) {
            var howManyTimes = 0;
            if (array[arrayIndex] === array[counter]) {
                howManyTimes++;
            }
        }

        modeAppearances = howManyTimes;
    }

    return mode;
}



/*
i need: 
something to contain the number of times the current index I'm checking appears (howManyTimes)
something to 

*/