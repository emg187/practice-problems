function findVowels(str){
    var vowelsString = "";

    for (var index=0; index<str.length; index++){
        switch(str[index]){
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                vowelsString+=str[index];
                break;
            default:
                break;  
        }
    }

    return vowelsString;
}