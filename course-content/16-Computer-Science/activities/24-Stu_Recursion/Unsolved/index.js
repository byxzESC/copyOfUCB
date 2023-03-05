// TODO: Add a comment describing what the `position` parameter means for this function.
// const fibonacci = (position) => {
//   // TODO: Add a comment describing the purpose of this conditional statement.
//   if (position < 2) {
//     return position;
//   }

//   // TODO: Add a comment describing the purpose of this return statement.
//   return fibonacci(position - 1) + fibonacci(position - 2);
// };

// // TODO: What will this return?
// console.log(fibonacci(9));


const fibonacci = (position, memo={}) => {

  // base case
  if (position < 2) {
    return position;
  }
  // memory to get rid of redundant function calls
  if (memo[position]) {
    return memo[position];
  }

  memo[position] = fibonacci(position - 1) + fibonacci(position - 2);
  return memo[position]
};

console.log(fibonacci(9));



// fifthStack fibonacci(5) 
// fourthstack fibonacci(6) fibonacci(5) fibonacci(5) fibonacci(4)     fibonacci(5) fibonacci(4) fibonacci(4) fibonacci(3)
// thirdStack          fibonacci(7) fibonacci(6)                                    fibonacci(6) fibonacci(5)
// secondstack fibonacci(8) fibonacci(7)
// firstStack 9












// fifth fibonacci(1) = 1 fibonacci(0) = 0
// fourth fibonacci(2) = 1 fibonacci(1) = 1  fibonacci(1) = 1 fibonacci(0) = 0        fibonacci(1) = 1 fibonacci(0) = 0
// third           fibonacci(3) = 2                fibonacci(2) = 1                          fibonacci(2) = 1  fibonacci(1) = 1
// second                          fibonacci(4) = 3                                                 fibonacci(3) = 2 
// first fibonacci(5) = 5