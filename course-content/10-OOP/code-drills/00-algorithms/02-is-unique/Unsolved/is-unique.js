// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    var isDup = {};
    for (let i = 0; i < arr.length; i++) {
        if (isDup[arr[i]] !== true) {
            console.log(isDup, isDup[i])
            isDup[arr[i]] = true;
        } else {
            return false;
        }
    }
    return true;
};
