

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

    } while (!colon);
    pathObj.protocol = protocolString;


    //find the position of the second forward slash, right before the host
    var slashIndex = 0;
    var slashCounter = 0;
    var secondForwardSlash;
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

    

    return pathObj;
}

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
