// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

// Start at the beginning of the array
// Move into a loop
// Compare only 2 values
// Swap if left is more than right
// Repeat until this current value is greater than the left value
// OR the current value is at the far left of the array (the zero index)
function insertionSort(arr) {
  // iterate over arr

  for ( let i = 1; i < arr.length; i++ ) {

    for ( let j = i; j > 0; j-- ) {

      if (arr[j] < arr[j-1]){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
}
const arr = [11, 2, 11, 24, 2, 11]
//         j = 1
// if (data[j] = 2 < data[j-1] = 13)
//         temp = 2
//         data[j] = 13
//         data[j - 1] = 2
//         2, 13

//         j = 0

//         [ 2, 13, 5]
//         i = 2
//         j = 2     data[2] = 5
// if (data[j] = 5 < data[j-1] = 13)
//   temp = 5
//   data[j] = 13
//   data[j - 1] = 5



//   [2, 5, 13, 1]
//         for (int i = 3; i < data.length; i++) { 
//             for(int j = i ; j > 0 ; j--){
//               if ()


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
insertionSort(array);
console.log(array.join(" "));
// console.log(insertionSort(array).join(" "));
