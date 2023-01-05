// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var timerInterval = setInterval(function() {
    console.log("Question 01")
}, 1000 * 5);


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var timerIntervalQ2 = setInterval(function() {
    alert("Question 02")
}, 1000 * 10);


// Clear the interval you made in this question
clearInterval(timerIntervalQ2);


// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var Q3 = document.getElementById("question-03");
var timerIntervalQ3 = setInterval(function() {
    console.log("div of 3 for question 3");
    Q3.append("3");
}, 1000 * 3)



// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
setInterval(function() {
    console.log("clears Question 3 now");
    clearInterval(timerIntervalQ3);
}, 1000 * 6);


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds
var timerIntervalQ5 = document.getElementById('question-05');




// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second



// Create a timer to clear the interval after 6 seconds



// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds
setTimeout(function() {
    console.log('clears question 01');
    clearInterval(timerInterval);
}, 1000 * 10);




