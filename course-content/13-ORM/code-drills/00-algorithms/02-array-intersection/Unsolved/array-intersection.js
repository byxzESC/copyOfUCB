// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

var arrayIntersection = function(arr1, arr2) {
    const result = {};
    const copy = [];

    arr1.forEach((x) => {
        result[x] = true;
    });

    arr2.forEach( (x) => {
        if (result[x] === true) {
            copy.push(x);
        }
    })
    return copy
};