export default class AppRender {
  constructor() {
    this.create = (tag, className, value, innerHTML, target) => {
      const elem = document.createElement(tag);
      elem.className = className;
      if (value) elem.value = value;
      if (innerHTML) elem.innerHTML = innerHTML;
      document.querySelector(`.${target}`).append(elem);
    };
  }

  render() {
    for (let i = 2; i < 7; i += 1) {
      this.create('option', 'level-item', i, i, 'select-level');
    }
    for (let i = 2; i < 61; i += 1) {
      this.create('option', 'page-item', i, i, 'select-page');
    }
  }
}
