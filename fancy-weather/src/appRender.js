import monthsDay from './date';

export default class AppRender {
  constructor(className) {
    this.className = className;
  }

  createElement(tag, className, innerHTML, target = `.${this.className}`, action, type, placeholder, value) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    if (action) elem.action = action;
    if (type) elem.type = type;
    if (placeholder) elem.placeholder = placeholder;
    if (value) elem.value = value;
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
    this.createElement('form', 'search', '', `.${this.className}-control`, '#');
    this.createElement('input', 'input', '', '.search', null, 'text', 'Search city');
    this.createElement('input', 'submit', '', '.search', null, 'submit', null, 'Search');

    this.createElement('div', 'geo', 'count', '.app-weather');
    this.createElement('div', 'calendar', 'calendar', '.app-weather');
    this.createElement('div', 'time', 'time', '.app-weather');
  }

  content() {
    const geo = document.querySelector('.geo');
    const calendar = document.querySelector('.calendar');
    const stack = sessionStorage;
    const date = new Date();

    setInterval(() => {
      const clock = new Date();
      document.querySelector('.time').innerHTML = `${clock.getHours()}:${clock.getMinutes()}:${clock.getSeconds()}`;
    }, 1000);

    document.querySelector(`.${this.className}`).addEventListener('loadGeo', () => {
      geo.innerHTML = `${JSON.parse(stack.geo).city}, ${JSON.parse(stack.geo).count}`;
      calendar.innerHTML = `${monthsDay.days[date.getDay()]} ${date.getDate()} ${monthsDay.months[date.getMonth()]}`;
    });

    document.querySelector(`.${this.className}`).addEventListener('loadImg', () => {
      document.querySelector(`.${this.className}`).style.backgroundImage = `url(${sessionStorage.image})`;
    });
  }
}
