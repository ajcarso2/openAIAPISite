var renderer = new marked.Renderer();
renderer.paragraph = function(text) {
  return text + '<br>';  // override paragraph rendering to avoid additional line breaks
};

marked.setOptions({
  renderer: renderer
});


document.getElementById('chat-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents the default action of the Enter key
    var input = this.value; // Gets the value of the input
    this.value = ''; // Clears the input
    var activeTextbox = document.querySelector('.giant-text-box.active'); // Find the active text box
    console.log(activeTextbox);


    if (activeTextbox) { // If an active text box was found...
      if(activeTextbox.textContent.trim() === "Content..."){
        activeTextbox.innerHTML = "";
      }

      var output = marked.parse("**Your Prompt Was:** " + input); // Create a variable to store the output

      activeTextbox.innerHTML += output; // Add the input value to the active text box
    }
  }
});
