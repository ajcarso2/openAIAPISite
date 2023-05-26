document.getElementById('chat-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents the default action of the Enter key
    var input = this.value; // Gets the value of the input
    this.value = ''; // Clears the input
    var activeTextbox = document.querySelector('.giant-text-box.active'); // Find the active text box
    if (activeTextbox) { // If an active text box was found...

      var output = "Your prompt was: " + input;

      // Render the output in markdown
      activeTextbox.textContent = output;
    }
  }
});
