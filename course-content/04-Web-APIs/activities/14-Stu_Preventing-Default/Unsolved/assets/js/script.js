var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");


function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}
  // how does this line work, why line 7 works but this will add two string together after i added tofixed

function calculateTotal(total, tipAmount) {
  console.log('total is ' + total, ', tip ' + tipAmount);
  console.log(typeof tipAmount);
  return parseFloat(total) + parseFloat(tipAmount).toFixed(3);
}

function addTip(event) {
  console.log(event);
  event.preventDefault();
  console.log('user input ' + typeof totalEl.value);
  var tipPercentage = tipEl.value * .01;//same as * 100
  var total = totalEl.value;//get the value of the input field 
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(total, tipAmount);
  document.querySelector("#tip-amount").textContent = tipAmount;
  console.log('new total type is ' + typeof newTotal)
  document.querySelector("#new-total").textContent = newTotal;
}

submitEl.addEventListener("click", addTip);