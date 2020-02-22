// Takes current URL, converts it into a temporary text input element, selects it, copies it to clipboard and then deletes the input element
function copyURL() {
  const copyText = window.location.href;
  const dummyInput = document.createElement("input");
  dummyInput.type = "text";
  dummyInput.value = copyText;
  document.body.appendChild(dummyInput);
  dummyInput.select();
  document.execCommand("copy");
  document.body.removeChild(dummyInput);
}

// Add event for user clicking "Share" button
document.getElementById("shareButton").addEventListener("click", copyURL);
