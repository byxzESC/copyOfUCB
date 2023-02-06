// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    const result = arr.map((x) => {
        return x*x;
    })

    return result.sort((a,b) => {
        if (a > b) {
            return 1;
        } 
        if (a < b) {
            return -1;
        }
        return 0;
    });
};
