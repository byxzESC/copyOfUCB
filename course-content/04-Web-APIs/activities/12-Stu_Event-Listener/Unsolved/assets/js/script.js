var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener('scroll', function() {
  count += 1;
  console.log(count);
  setCounterText();
})
// TODO: Add event listener to decrement button 
decrementEl.addEventListener('scroll', function() {
  count -= 1;
  setCounterText();
})