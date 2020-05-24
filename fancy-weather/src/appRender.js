export default class AppRender {
  constructor(className) {
    this.className = className;
  }

  createElement(tag, className, innerHTML, target = `.${this.className}`) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    document.querySelector(target).append(elem);
  }

  render() {
    this.createElement('div', this.className, '', 'body');
    this.createElement('div', `${this.className}-control`, '', `.${this.className}`);
    this.createElement('div', `${this.className}-container`, '', `.${this.className}`);
    this.createElement('div', `${this.className}-weather`, '', `.${this.className}-container`);
    this.createElement('div', `${this.className}-map`, '', `.${this.className}-container`);

    this.createElement('div', 'control-left', '', `.${this.className}-control`);
    this.createElement('div', 'change-image', '<img class=\'icon-change spin\' src=../src/img/change.png>', '.control-left');

    this.createElement('select', 'change-lang', '', '.control-left');
    this.createElement('option', 'en', 'English', '.change-lang');
    this.createElement('option', 'ru', 'Russian', '.change-lang');
    this.createElement('option', 'be', 'Belarusian', '.change-lang');

    this.createElement('div', 'change-units si', '&deg;C', '.control-left');
    this.createElement('div', 'change-units us', '&deg;F', '.control-left');
    this.createElement('form', 'search', '', `.${this.className}-control`);
  }

  content() {
    document.querySelector(`.${this.className}`).addEventListener('load', () => {
      document.querySelector(`.${this.className}`).style.backgroundImage = `url(${sessionStorage.image})`;
    });
  }
}
