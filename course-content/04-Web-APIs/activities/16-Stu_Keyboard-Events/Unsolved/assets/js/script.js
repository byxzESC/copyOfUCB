function keydownAction(event) {
  // TODO: Complete keydown function
  console.log('this is keydown event');
  console.log(event)
}

function keyupAction() {
	
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event

