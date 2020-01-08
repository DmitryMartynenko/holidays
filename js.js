// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

arr = [160, 3, 1719, 19, 11, 13, -21];
function returnOddOrEven(arr) {
    var arrStatus = isEvenArray(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arrStatus == true) {
            if (arr[i] % 2 != 0) {
                return arr[i]
            }
        }
        if (arrStatus == false) {
            if (arr[i] % 2 == 0) {
                return arr[i];
            } else {
                console.log("Array is already good")
            }
        }
    }
}

function isEvenArray(arr) {
    if ((arr[0]) % 2 == 0 && (arr[1]) % 2 == 0 ||
        (arr[1]) % 2 == 0 && (arr[2]) % 2 == 0 ||
        (arr[0]) % 2 == 0 && (arr[3]) % 2 == 0) {
        return true
    } else {
        return false
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// //
// //     Examples input/output:
// //
// // XO("ooxx") => true
// // XO("xooxx") => false
// // XO("ooxXm") => true
// // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// // XO("zzoo") => false

var str = "ooxx";
function sameAmountXAndO(str) {
    var amountX = 0;
    var amountO = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == 'x'){
            amountX+= 1;
        }
        if (str[i] == 'o'){
            amountO+= 1;
        }
        if (amountO == 0) {
            amountX+= 10;
        }
    }
    if (amountX == amountO){
        return true
    } else {
        return false
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

var strTwo = "one twi three man woman spider-man spider-pig whoami I";
function whoIsShorter(str) {
    var strToArray = str.split(' ');
    var shortestWordLength  = strToArray[0].length ;
        for (var i = 0; i <  strToArray.length; i++){
        if (shortestWordLength  > strToArray[i].length ){
            shortestWordLength  = strToArray[i].length;
        }
    }return  shortestWordLength ;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//
//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, and u as vowels for this Kata.
//The input string will only consist of lower case letters and/or spaces.

function vowelsCount(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if ( str[i] == 'a' ||
             str[i] == 'e' ||
             str[i] == 'i' ||
             str[i] == 'o' ||
             str[i] == 'u' ){
            result += 1;
        }
    }
    return result
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function vowelsCount(str) {
    return (str.match(/[aeiou]/g) || []).length
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
//
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function onlyNumbers(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            newArr.push(arr[i])
        }
    }
    return newArr
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function onlyNumbersFilter(arr){
    var Filtered = arr.filter(it => typeof it === 'number');
    return Filtered
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
