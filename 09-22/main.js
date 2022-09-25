// errors not handled
/*
const input = document.getElementById('input');
input.addEventListener('change', function() {
  if (input.value > 10) {
    throw new Error('woah that\'s too big!');
  }
  console.log('thanks that\'s a good number');
});
*/

// errors are handled
/*
const input = document.getElementById('input');

function handleInput() {
  if (input.value > 10) {
    throw new Error('woah that\'s too big!');
  }
  console.log('thanks that\'s a good number');
}

input.addEventListener('change', function() {
  try {
    // try the code
    handleInput();
  } catch (e) {
    // handle the error
    console.error(e);
  } finally {
    // this code will run after handling the error
  }
  // maybe there's more code
});
*/

// synchonous code
/*
function takesAReallyLongTime() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  console.log(`the really big sum is ${sum}`);
  return sum;
}

const result = takesAReallyLongTime()
console.log(result);
console.log('this log takes place after takesAReallyLongTime');
*/

// async code using setTimeout
/*
function takesAReallyLongTime() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  console.log(`the really big sum is ${sum}`);
  return sum;
}

setTimeout(function() {
  const result = takesAReallyLongTime();
  console.log(result);
});

console.log('this log takes place after takesAReallyLongTime');
*/

// async with promises
/*
function takesAReallyLongTimeWithPromises() {
  return new Promise(function(resolve, reject) {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
      sum += i;
    }
    console.log(`the really big sum is ${sum}`);
    resolve(sum);
  });
}

takesAReallyLongTimeWithPromises()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

console.log('this log takes place after takesAReallyLongTime');
*/

// async code with async function
/*
async function takesAReallyLongTimeAsync() {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  console.log(`the really big sum is ${sum}`);
  return sum;
}

console.log(takesAReallyLongTimeAsync());

// force it to be synchronous with await
const result = await takesAReallyLongTimeAsync();
console.log(result);
console.log('this log takes place after takesAReallyLongTime');
*/

// bad loop with setTimeout
/*
let counter = 0;
function loop() {
  console.log('loop!')
  console.log(counter);
  counter++;

  setTimeout(loop, 100);
}

setTimeout(loop);
*/

// do it better with setInterval
/*
let counter = 0;
function loop() {
  console.log('loop!')
  console.log(counter);
  counter++;
}

const intervalId = setInterval(loop, 100);
button.addEventListener('click', () => {clearInterval(intervalId)});
*/

// do it best with requestAnimationFrame
let counter = 0;
function loop() {
  console.log('loop!')
  console.log(counter);
  counter++;

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
