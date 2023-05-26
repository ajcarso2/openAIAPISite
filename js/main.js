// Get all the buttons and text boxes
const buttons = document.querySelectorAll('.nav-button');
const textBoxes = document.querySelectorAll('.giant-text-box');

// Loop through each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the target text box from the button's data-target attribute
    const targetId = button.getAttribute('data-target');
    const targetBox = document.getElementById(targetId);

    // Remove the 'active' class from all text boxes
    textBoxes.forEach((box) => {
      box.classList.remove('active');
    });

    // Add the 'active' class to the target text box
    targetBox.classList.add('active');
  });
});
