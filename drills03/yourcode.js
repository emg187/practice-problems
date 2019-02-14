

function getPath(string){

    var array = [];
    var directoryName = "";

    for (var stringIndex=0; stringIndex<string.length; stringIndex++) {

        if (string[stringIndex] !== "/") {
            directoryName+=string[stringIndex];
        }  else {
            array.push(directoryName);
            directoryName = "";
        }

        if (stringIndex === (string.length-1)) {
            array.push(directoryName);
        }

    }

    return array;
}

function getPathParts(string){

    var pathObj = {};

    //create protocol string and add it to the object 
    var protocolString = "";
    var protocolIndex = 0;
    var colon = false;
    do {

        if (string[protocolIndex] !== ":") {
        protocolString+=string[protocolIndex];
        protocolIndex++;
        } else {
            colon = true;
        }

    } while(!colon);
    pathObj.protocol = protocolString;

    //find the position of the second forward slash, right before the host
    var slashIndex = 0;
    var slashCounter = 0;
    do {
        if (string[slashIndex] !== "/") {
            slashIndex++;
        } else {
            slashCounter++;
            if (slashCounter<2) {
                slashIndex++;
            }
        }
    } while(slashCounter !== 2);
    //slashIndex now holds the position of the second forward slash
    //create host string and add it to the object
    var hostIndex = slashIndex+1;
    var hostString = "";
    colon = false;
    do {
        if (string[hostIndex] !== ":") {
            hostString+=string[hostIndex];
            hostIndex++;
        } else {
            colon = true;
        }
    } while(!colon);
    pathObj.host = hostString;

    //create port string and add it to the object
    var portIndex = hostIndex+1;
    var portString = "";
    var forwardSlash = false;
    do {
        if (string[portIndex] !== "/") {
            portString+=string[portIndex];
            portIndex++;
        } else {
            forwardSlash = true;
        }
    } while(!forwardSlash);
    var port = parseInt(portString);
    pathObj.port = port;

    //create path string and add it to the object 
    var pathIndex = portIndex+1;
    var pathString = "";
    var lastForwardSlash = string.lastIndexOf("/");
    do {
        pathString+=string[pathIndex];
        pathIndex++;
    } while(pathIndex<lastForwardSlash);
    pathObj.path = pathString;

    //create file string and add it to the object
    var fileIndex = pathIndex+1;
    var fileString = "";
    do {
        fileString+=string[fileIndex];
        fileIndex++;
    } while(fileIndex<string.length);
    pathObj.file = fileString;

    return pathObj;
}

function getCapitalCount(array){

    var capitals = 0;
    for (var arrayIndex=0; arrayIndex<array.length; arrayIndex++) {
        var testLetter = array[arrayIndex][0].toUpperCase();
        if (array[arrayIndex][0] === testLetter) {
            capitals++;
        }
    }

    return capitals;
}

function correctCalcChecker(array){

    var newArray = [];

    for (arrayIndex=0; arrayIndex<array.length; arrayIndex++) {
        var num1 = array[arrayIndex].num1;
        var num2 = array[arrayIndex].num2;
        var op = array[arrayIndex].op;
        var result = array[arrayIndex].result;

        if (op === "+") {
            if (result === num1+num2) {
                newArray.push(array[arrayIndex]);
            }
        } else if (op === "-") {
            if (result === num1-num2) {
                newArray.push(array[arrayIndex]);
            }
        } else if (op === "*") {
            if (result === num1*num2) {
                newArray.push(array[arrayIndex]);
            }
        } else if (op === "/") {
            if (result === num1/num2) {
                newArray.push(array[arrayIndex]);
            }
        }
    }

    return newArray;
}

function doMath(){

}
