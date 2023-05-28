import {JSONNetworkHandler} from './JSONNetworkSend.js';

const renderer = new marked.Renderer();
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

    let ai = ""

    if (activeTextbox) { // If an active text box was found...
      if(activeTextbox.textContent.trim() === "Content..."){
        activeTextbox.innerHTML = "";
      }

      ai = activeTextbox.id;

      if(ai === "ada"){
        ai = "text-ada-001"
      }else if(ai === "davinci"){
        ai = "text-davinci-003"
      }else if(ai === "gpt-3.5"){
        ai = "gpt-3.5-turbo"
      }

      let messenger = new JSONNetworkHandler("localhost", 5000);
      messenger.sendPrompt(input, ai).then((response) => {
        console.log(response);
        let output = marked.parse("Your Prompt Was: " + input + "\n" + "The AI's Response Was: " + response.data.Response);
        activeTextbox.innerHTML += output;
      }).catch((error) => {
        console.log(error);
      });
    }
  }
});
