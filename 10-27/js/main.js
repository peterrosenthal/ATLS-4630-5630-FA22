import * as _ from 'lodash';

// sometimes lodash is the same as native js
// _.now();
// Date.now();

function sayHello(name, times) {
  for (let i = 0; i < times; i++) {
    const p = document.createElement('p');
    p.innerHTML = `Hello ${name}, for the ${i}th time!`;
    document.body.append(p);
  }
}

// _.delay(sayHello, 1500, 'Peter');

const input = document.querySelector('input');
input.addEventListener('change', () => {
  console.log('changed!');
  const times = _.clamp(input.value, 0, 10);
  _.delay(sayHello, 1500, 'Peter', times);
})
