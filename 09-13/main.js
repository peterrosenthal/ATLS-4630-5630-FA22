const button = document.querySelector('#my-button');
button.addEventListener('click', () => {
  // process form here

  // text input
  const firstTextInput = document.querySelector('#first-text-input');
  console.log(firstTextInput.value);

  // color input
  const colorInput = document.querySelector('#color-input');
  const form = document.querySelector('form');
  form.style.backgroundColor = colorInput.value;

  //checkboxes input
  const checkboxesElement = document.querySelector('#checkboxes');
  const checkboxes = checkboxesElement.querySelectorAll('input');
  for (const checkbox of checkboxes) {
    console.log(checkbox.checked);
  }
});

// disable form from refreshing the page when you press enter
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
