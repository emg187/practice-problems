function random_range(start_num, end_num){

    var result;
    if (typeof(start_num) === "object" && typeof(end_num === "undefined")){
    var randomIndex = Math.floor(Math.random()*start_num.length);
    result = start_num[randomIndex];
    } else {
    result = Math.floor(Math.random()*end_num)+start_num;
    }

    return result;
}

