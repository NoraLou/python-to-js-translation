var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44", "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", "33", "999", "9"];
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

function duplicateItems(myArray){
    var duplicates = {};
    for(var i = 0; i < myArray.length; i++){
        if (myArray[i] in duplicates){
            duplicates[myArray[i]] += 1;
        }
        else{
            duplicates[myArray[i]] = 1;
        }
    }
    var newArray = [];
    for(key in duplicates){
        if(duplicates[key] > 1){
            newArray.push(key);
        }
    }
    return newArray;
}

console.log(duplicateItems(hackbrightStudents));