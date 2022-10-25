(() => {
  // js/Box.js
  var Box = class {
    constructor(color, width, height, x, y) {
      this.el = document.createElement("div");
      this.el.style.backgroundColor = color;
      this.el.style.width = `${width}px`;
      this.el.style.height = `${height}px`;
      this.el.style.position = "absolute";
      this.el.style.left = `${x}px`;
      this.el.style.top = `${y}px`;
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
    }
    onMouseEnter() {
    }
    onMouseLeave() {
    }
    getElement() {
      return this.el;
    }
  };

  // js/RedBox.js
  var RedBox = class extends Box {
    constructor(width, height, x, y) {
      super("#A40E4C", width, height, x, y);
    }
    onMouseEnter() {
      this.el.style.backgroundColor = "#850A43";
      console.log("hello world!");
    }
    onMouseLeave() {
      this.el.style.backgroundColor = "#A40E4C";
    }
  };

  // js/BlueBox.js
  var BlueBox = class extends Box {
    constructor(width, height) {
      super("#2C2C54", width, height, 0, 0);
      this.el.style.zIndex = "-1";
      window.addEventListener("mousemove", this.onMouseMove);
    }
    onMouseMove = (event) => {
      this.el.style.left = `${event.pageX}px`;
      this.el.style.top = `${event.pageY}px`;
    };
  };

  // js/main.js
  var redBox = new RedBox(200, 100, 100, 150);
  var blueBox = new BlueBox(300, 50);
  document.body.appendChild(redBox.getElement());
  document.body.appendChild(blueBox.getElement());
})();
//# sourceMappingURL=bundle.js.map
