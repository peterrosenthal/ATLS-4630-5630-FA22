export default class UrlBuilder {
  constructor(base) {
    this.base = base;

    this.params = {};
  }

  addParam(key, value) {
    this.params[key] = value;
  }

  build() {
    let url = this.base;
    let counter = 0;

    for (const key in this.params) {
      url += counter === 0 ? '?' : '&';
      url += key;
      url += '=';
      url += this.params[key];

      counter++;
    }

    return url;
  }
}
