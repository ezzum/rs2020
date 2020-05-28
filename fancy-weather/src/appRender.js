import monthsDay from './date';

export default class AppRender {
  constructor(className) {
    this.className = className;
  }

  createElement(tag, className, innerHTML, target = `.${this.className}`, action, type, placeholder, value, id) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    if (action) elem.action = action;
    if (type) elem.type = type;
    if (placeholder) elem.placeholder = placeholder;
    if (value) elem.value = value;
    if (id) elem.id = id;
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

    this.createElement('div', 'geo-container', '', '.app-weather');
    this.createElement('div', 'geo', 'count', '.geo-container');
    this.createElement('div', 'calendar', 'calendar', '.geo-container');
    this.createElement('div', 'time', 'time', '.geo-container');

    this.createElement('div', 'weat-now', '', '.app-weather');
    this.createElement('div', 'temp-now', 'temp', '.weat-now');
    this.createElement('div', 'descrip-now', '', '.weat-now');
    this.createElement('div', 'icon-now', 'icon', '.descrip-now');
    this.createElement('div', 'code-now', 'code', '.descrip-now');
    this.createElement('div', 'feels-like-now', 'feels', '.descrip-now');
    this.createElement('div', 'wind-now', 'wind', '.descrip-now');
    this.createElement('div', 'humidity-now', 'humid', '.descrip-now');

    this.createElement('div', 'weather-days', '', '.app-weather');
    this.createElement('div', 'day', '', '.weather-days');
    this.createElement('div', 'day', '', '.weather-days');
    this.createElement('div', 'day', '', '.weather-days');

    this.createElement('div', 'map', '', `.${this.className}-map`, null, null, null, null, 'map');
    this.createElement('div', 'lat-long', '', '.app-map');
    this.createElement('div', 'lat', '', '.lat-long');
    this.createElement('div', 'long', '', '.lat-long');
  }

  content() {
    const calendar = document.querySelector('.calendar');
    const date = new Date();

    setInterval(() => {
      const clock = new Date();
      document.querySelector('.time').innerHTML = `${`0${clock.getHours()}`.slice(-2)}:${`0${clock.getMinutes()}`.slice(-2)}:${`0${clock.getSeconds()}`.slice(-2)}`;
    }, 1000);

    document.querySelector(`.${this.className}`).addEventListener('loadGeo', () => {
      const geo = document.querySelector('.geo');
      const stackGeo = JSON.parse(sessionStorage.geo);
      const { lat } = JSON.parse(sessionStorage.getItem('geo'));
      const { long } = JSON.parse(sessionStorage.getItem('geo'));
      const latStr = document.querySelector('.lat');
      const longStr = document.querySelector('.long');

      geo.innerHTML = `${stackGeo.city}, ${stackGeo.count}`;
      calendar.innerHTML = `${monthsDay.days[date.getDay()]} ${date.getDate()} ${monthsDay.months[date.getMonth()]}`;
      latStr.innerHTML = `Latitude: ${lat.split('.')[0]}&deg;${lat.split('.')[1].slice(0, 2)}'`;
      longStr.innerHTML = `Longitude: ${long.split('.')[0]}&deg;${long.split('.')[1].slice(0, 2)}'`;
    });

    document.querySelector(`.${this.className}`).addEventListener('loadWeather', () => {
      const tempNow = document.querySelector('.temp-now');
      const code = document.querySelector('.code-now');
      const feels = document.querySelector('.feels-like-now');
      const wind = document.querySelector('.wind-now');
      const humid = document.querySelector('.humidity-now');
      const days = document.querySelectorAll('.day');

      const stackWeatNow = JSON.parse(sessionStorage.weatherNow);
      const stackWeatDays = JSON.parse(sessionStorage.weatherFurther);
      tempNow.innerHTML = `${stackWeatNow.temp}`.includes('-') ? `${stackWeatNow.temp}&deg;` : `+${stackWeatNow.temp}&deg;`;
      code.innerHTML = `${stackWeatNow.code[0].toUpperCase()}${stackWeatNow.code.replace(/_/g, ' ').slice(1)}`;
      feels.innerHTML = `${stackWeatNow.temp}`.includes('-') ? `Feels like: ${stackWeatNow.temp}&deg;` : `Feels like: +${stackWeatNow.temp}&deg;`;
      wind.innerHTML = `Wind: ${stackWeatNow.wind} m/s`;
      humid.innerHTML = `Humidity: ${stackWeatNow.humidity}%`;
      days.forEach((el, indx) => {
        const temp = `${stackWeatDays[indx].temp}`.includes('-') ? `${stackWeatDays[indx].temp}` : `+${stackWeatDays[indx].temp}`;
        el.innerHTML = `<div class=name-day>${monthsDay.daysFull[date.getDay() + indx]}</div>
                        <div class=temp-icon-days>
                          <div class=temp-days>${temp}&deg;</div>
                          <div class=icon-days>icon</div>
                        </div>`;
      });
    });

    document.querySelector(`.${this.className}`).addEventListener('loadImg', () => {
      document.querySelector(`.${this.className}`).style.backgroundImage = `url(${sessionStorage.image})`;
    });
  }
}
