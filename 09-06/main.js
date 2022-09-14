// constants - they take up less memory than variables
const x = 2;

// variables - use let instead of var
let y = 3;

y = x + y;
console.log(y);

// strings - can be double quotes or single quotes
const str = "this is bob's";
// template literals - a very nice way to do string interpolation
const template = `this is a ${x} template ${y} literal ${x + y}`;
// concatenations - not as cool as template literals
const concat = 'this is ' + x + ' a concatenation';

console.log(str);
console.log(template);
console.log(concat);

// arrays - declared using square brackets
const myArray = [0, 2, 7, 8];

console.log(myArray);
// array values are accessed using index/bracket notation
console.log(myArray[3]);

// array lengths are flexible, add a new entry to the end of an array with the push function
myArray.push(10);

console.log(myArray);

// objects - key-value pairs, declared using square brackets
const classroom = {
  building: "ATLAS",
  room: 104
};

console.log(classroom);
// object properties are accessed using dot notation most of the time
console.log(classroom.room);
// object properties can be accessed using key/bracket notation if you really want to (or need to given the circumstances)
console.log(classroom["building"]);

// new properties can be added to an object using dot notation
classroom.ocupancyLimit = 30;

console.log(classroom);

// conditionals - use triple equals for reliable guaranteed equalities
y = 11;
const stringy = "11";
if (y === stringy) {
  console.log(y);
} else {
  console.log(x);
}

// while loops - don't let them run forever
while (y < 15) {
  console.log(y);
  y++;
}

// traditional for loop - syntax is for (initial; condition; update) {}
for (let i = 0; i < myArray.length; i++) {
  console.log(`index: ${i}`);
  console.log(`value: ${myArray[i]}`);
}

// for...of loop - used for looping through the entries in any array-like object
for (const item of myArray) {
  console.log(`value: ${item}`);
}

// for...in loop - used for looping through the keys in any object
// looks deceptively similar to a for...of loop, but you're going to use it way less often
for (const key in classroom) {
  console.log(`key: ${key}`);
  console.log(`value: ${classroom[key]}`);
}

// .forEach() function - behaves like the for...of loop, but uses a callback function instead of a regular scope
myArray.forEach(function(item) {
  console.log(`value: ${item}`);
});

// anonymous functions like the one above or the one below are never given a name, so they need to be immediately passed into another function as a callback, or called right away after declaration
myArray.forEach((item) => {
  console.log(`value: ${item}`);
});

// functions - traditional syntax uses the function key word
function add(x, y) {
  return x + y;
}

console.log(add(7, 15));

// arrow functions - behave exactly the same, but it is more clear that the function is also a constant/variable itself
const subtract = (x, y) => {
  return x - y;
}

console.log(subtract(7, 15));

// DOM controls
// getElementById retrieves the element from the page with the matching id that you specified
const h1 = document.getElementById("heading");
// DOM properties - can be manipulated as if the element were any regular old javascript object (because it is!)
h1.innerText = "hello from js!";

// querySelectorAll allows for you to retrieve a list of elements using CSS style queries
const divs = document.querySelectorAll(".my-div");
for (const div of divs) {
  // CSS styles can also be changed by changing properties of the style property of the element (2 levels of dot notation deep)
  div.style.backgroundColor = "#0000ff";
}

// querySelector will just retrieve the first element it finds using the CSS style query
const div = document.querySelector("div");

// Events
// events can be using event listeners (callback functions)
// event listeners can be added to any DOM element using the addEventListener function
div.addEventListener('mouseenter', () => {
  div.style.backgroundColor = "#ff0000";
});

div.addEventListener('mouseleave', function() {
  div.style.backgroundColor = "#0000ff";
});

// events can also pass an event parameter, keyboard events are
// different from mouse events are different from many other types of event
window.addEventListener('keyup', (event) => {
  // keyboard events have a 'code' property which helps you figure out what key was pressed
  // see mdn for keyboard events and mouse events to learn more about the properties available
  console.log(event.code);
})
