//takes in a string, and finds the middle character, or characters
//if it's an odd numbered length, str.length%2!==0, return one character
    //for such strings, the middle character is at index str.length/2-0.5
//if it's an even numbered length, str.length%2===0, return two characters 
    //for such strings, the middle characters are at indeces str.length/2-1 and str.length/2

function middleOfString(str){
    var middle;

    if (str.length%2!==0){
        middle = str[(str.length/2)-0.5];
    } else {
        middle = str[(str.length/2)-1] + str[str.length/2];
    }

    return middle;
}



