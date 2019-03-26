

function populateRecords(chargesArray){
    var returnObj = {};
    var charge = 0;
    var cashAdvance = 0;

    var chargeRecord = $("<div>");
    var recordHeader = $("<div class='transactionRecord'>");
    var typeHeader = $("<div class='transactionType'>");
    var sourceHeader = $("<div class='transactionLocation'>");
    var amountHeader = $("<div class='transactionAmount'>");

    typeHeader.text("TYPE");
    sourceHeader.text("SOURCE");
    amountHeader.text("AMOUNT");

    recordHeader.append(typeHeader);
    recordHeader.append(sourceHeader);
    recordHeader.append(amountHeader);

    chargeRecord.append(recordHeader);
    $("#testArea").append(chargeRecord);

    for (var index=0; index<chargesArray.length; index++){
        if (chargesArray[index]["type"] === "charge") {
            charge += parseFloat(chargesArray[index]["amount"]);
        } else if (chargesArray[index]["type"] === "cash advance"){
            cashAdvance += parseFloat(chargesArray[index]["amount"]);
        }

        var row = $("<div class='transactionRecord'>");
        var type = $("<div class='transactionType'>");
        var source = $("<div class='transactionLocation'>");
        var amount = $("<div class='transactionAmount'>");

        type.text(chargesArray[index]["type"]);
        source.text(chargesArray[index]["source"]);
        amount.text(chargesArray[index]["amount"]);

        row.append(type);
        row.append(source);
        row.append(amount);

        chargeRecord.append(row);
    }

    returnObj["charge"] = charge;
    returnObj["cash advance"] = cashAdvance;

    return returnObj;
}


