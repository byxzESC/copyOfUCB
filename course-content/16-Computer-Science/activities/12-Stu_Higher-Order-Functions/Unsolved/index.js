const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    // let sum = 0;
    // array.forEach(num => sum += num);

    // return sum/array.length
    // return (accumulator + currentValue) / array.length
    return accumulator += currentValue
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);
