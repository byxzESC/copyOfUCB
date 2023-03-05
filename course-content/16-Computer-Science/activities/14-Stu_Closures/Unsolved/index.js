// TODO: Complete the 'counter' function below.
function counter() {
    
}
  
  module.exports = counter;
  

// Input - [3, 5, 6, 10 ,11, 20] [1, 2, 7, 8, 15, 19]
// output - small to large

// combine two array with concat,
// use array.sort(a,b) and return

function arrayMerge(arr1, arr2) {
  if (Array.isArray(arr1)) {
    return null
  }
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  let result = arr1.concat(arr2);

  result.sort((a,b) => {
    return a >= b
});
  return result;
}