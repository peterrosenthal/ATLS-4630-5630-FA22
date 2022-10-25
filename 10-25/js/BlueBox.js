import Box from './Box.js';

export default class BlueBox extends Box {
  constructor(width, height) {
    super('#2C2C54', width, height, 0, 0);

    this.el.style.zIndex = '-1';

    window.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = (event) => {
    this.el.style.left = `${event.pageX}px`;
    this.el.style.top = `${event.pageY}px`;
  }
}
