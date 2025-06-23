// Define a function that will run when the user clicks the button
function handleDecision() {
  // Get the text the user entered in the input field
  const input = document.getElementById('decisionInput').value;

  // Find the paragraph element where we’ll show the response
  const response = document.getElementById('response');

  // Check if the user entered anything
  if (!input) {
    // If the input is empty, ask them to type something
    response.textContent = "Write something you're stuck on!";
  } else {
    // Otherwise, give them a supportive message with their input included
    response.textContent = "Try breaking it down into a small next step: " + input;
  }
}
