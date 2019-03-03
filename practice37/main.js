function alternateCaps(str){
    var alternateString;

    for (var index=0; index<str.length; index+=2){
        alternateString+=str[index];

        var capitalLetter = str[index+1].toUpperCase();
        alternateString+=capitalLetter;
    }

    return alternateString;
}