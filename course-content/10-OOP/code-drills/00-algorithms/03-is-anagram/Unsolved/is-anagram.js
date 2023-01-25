// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false
var isAnagram = function(strA, strB) {
    if (strA.length !== strB.length) {
        return false;
    }

    strA = strA.split('');
    strB = strB.split('');
    let isAnagrams = {};

    strA.forEach((letterA) => {
        isAnagrams[letterA] = true;
    })
    strB.forEach((letterB) => {
        if(isAnagram[letterB] !== true) {
            return false;
        }
    })
};
