// Get input from "fullName" and check it every time there is a change in the input field
var inputField = document.getElementById('fullName');
inputField.addEventListener('input', event => {
  var inputFieldValue = inputField.value;
  var inputWords = inputFieldValue.split(' ');

  // Check if there are 2 words in the "inputWords" array
  if (inputWords.length == 2 && inputWords[1].length > 0) {
    // Compare both in lower case to not validate same words that are capitalized differently
    if (inputWords[0].toLowerCase() == inputWords[1].toLowerCase()) {
      inputField.setCustomValidity('invalid');
    } else {
      inputField.setCustomValidity('');
    }
  }
});
