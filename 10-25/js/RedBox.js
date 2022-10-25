import Box from './Box.js';

export default class RedBox extends Box {
  constructor(width, height, x, y) {
    super('#A40E4C', width, height, x, y);
  }

  onMouseEnter() {
    this.el.style.backgroundColor = '#850A43';
    console.log("hello world!");
  }

  onMouseLeave() {
    this.el.style.backgroundColor = '#A40E4C';
  }
}
