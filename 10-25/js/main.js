import RedBox from './RedBox.js';
import BlueBox from './BlueBox.js';

const redBox = new RedBox(200, 100, 100, 150);
const blueBox = new BlueBox(300, 50);

document.body.appendChild(redBox.getElement());
document.body.appendChild(blueBox.getElement());
