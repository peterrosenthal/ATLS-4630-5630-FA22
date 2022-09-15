// console log for functions
// this is a typo so it wont happen
window.addEventListener('cick', () => {
  console.log('in click function!');
})

// === vs ==
// and variable types
let input = document.querySelector('#text-input');
input.addEventListener('change', () => {
  if (input.value == 2) {
    console.log('input.value == 2');
  }
  if (input.value === 2) {
    console.log('input.value === 2');
  }
  console.log(typeof input.value);
  console.log(typeof 2);
})

// null and undefined DOM elements
let inputTypo = document.getElementById('textinput');
window.addEventListener('resize', () => {
  console.log(inputTypo);
})
