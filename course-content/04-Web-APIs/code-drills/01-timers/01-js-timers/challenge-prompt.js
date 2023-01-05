// Practice with timers

(setInterval(function() {
console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
},5000));

var timeLeft = 1;
var timeLeftq3p1 = 1;

function intervals() {

    var quest2 = setInterval(function() {
        timeLeft--;
        console.log("==================== Question 02 ====================");
        // Create a timer that creates an alert that says "Question 2" after 15 seconds
        if (timeLeft === 0) {
            clearInterval(quest2);
        }
    }, 15000);


    var q3p1 = setInterval(function() {
        console.log("==================== Question 3 part 1 ====================");
        if (timeLeftq3p1 === 0) {
            clearInterval(q3p1);
        }
    }, 15000);
    (setInterval(function() {
        console.log("==================== Question 3 part 2 ====================");
    }, 16000));


}
intervals();
// Remove the timer you just made for Question 2


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds


// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds



console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1



console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"



