var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  console.log(event);
  // event.target.attribute.data-state
  var element = event.target;
  // element.getAttribute("data-state") = "show"
  var state = element.getAttribute("data-state");
  // TODO: Complete function

  if (state === "hidden") {
    element.setAttribute("data-state", "visible")
  }
});
