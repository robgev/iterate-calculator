const button1 = document.getElementById("btn-1");
const textField = document.getElementById("expression-field");
const buttons = document.querySelectorAll('.button-group button');
buttons.forEach(currentButton => {
  currentButton.addEventListener('click', event => {
    if (textField.value === '0') {
      textField.value = currentButton.innerText;
    } else {
      textField.value += currentButton.innerText;
    }
  })
})
