export default class Title {
  constructor(name) {
    this.name = name;
  }

  render() {
    const fontSize = '2em';
    return `<h1 style="font-size:${fontSize}">Hello ${this.name}!</h1>`;
  }
}
