

function changeElements(selectorString){
    var divs = document.querySelectorAll(selectorString);

    for (var index=0; index<divs.length; index++){

        var divText = divs[index].textContent;
        switch (divText){
            case "one": 
                divs[index].textContent = "1";
                break;
            case "two":
                divs[index].textContent = "2";
                break;
            case "three":
                divs[index].textContent = "3";
                break;
            case "four":
                divs[index].textContent = "4";
                break;
            case "five":
                divs[index].textContent = "5";
                break;
            case "six":
                divs[index].textContent = "6";
                break;
            case "seven":
                divs[index].textContent = "7";
                break;
            case "eight":
                divs[index].textContent = "8";
                break;
            case "nine":
                divs[index].textContent = "9";
                break;
            default: 
                break;
        }
    }
}

function appendTextToElement(selectorString, addedText){
    var divs = document.querySelectorAll(selectorString);

    for (var index=0; index<divs.length; index++){
        var divText = divs[index].textContent;
        var newText = divText+addedText;

        divs[index].textContent = newText;
    }
}

function addClass(selectorString, classString){
    var classesAdded = 0;
    var divs = document.querySelectorAll(selectorString);
    
    for (var index=0; index<divs.length; index++){
        $(divs[index]).addClass(classString);
        classesAdded++;
    }
    return classesAdded;
}

function removeElements(selectorString){

    $(selectorString).remove();

}

