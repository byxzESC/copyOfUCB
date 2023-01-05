var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function submissionHandler (event) {
    event.preventDefault();
    
    var shoppingItem = $('input[name="shopping-input"]').val();

    if (!shoppingItem) {
        console.log('no shopping item entered');
        return;
    }

    shoppingFormEl.append('<li>' + shoppingItem + '</li>');
    $('input[name="shopping-input"]').val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', submissionHandler);
