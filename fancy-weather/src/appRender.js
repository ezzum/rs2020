import monthsDay from './date';
import Translate from './translate';

export default class AppRender {
  constructor(className) {
    this.className = className;
    this.date = new Date();
  }

  createElement(tag, className, innerHTML, target = `.${this.className}`, action, type, placeholder, value, id, src) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    if (action) elem.action = action;
    if (type) elem.type = type;
    if (placeholder) elem.placeholder = placeholder;
    if (value) elem.value = value;
    if (id) elem.id = id;
    if (src) elem.src = src;
    document.querySelector(target).append(elem);
  }

  render() {
    this.createElement('div', this.className, '', 'body');
    this.createElement('div', `${this.className}-control`, '', `.${this.className}`);
    this.createElement('div', `${this.className}-error`, '', `.${this.className}`);
    this.createElement('div', `${this.className}-container`, '', `.${this.className}`);
    this.createElement('div', `${this.className}-weather`, '', `.${this.className}-container`);
    this.createElement('div', `${this.className}-map`, '', `.${this.className}-container`);

    this.createElement('div', 'control-left', '', `.${this.className}-control`);
    this.createElement('div', 'change-image', '', '.control-left');
    this.createElement('div', 'icon-change spin', '', '.change-image');

    this.createElement('select', 'change-lang', '', '.control-left');
    this.createElement('option', 'en', 'English', '.change-lang');
    this.createElement('option', 'ru', 'Russian', '.change-lang');
    this.createElement('option', 'be', 'Belarusian', '.change-lang');
    document.querySelector(`.${localStorage.lang}`).setAttribute('selected', 'selected');

    this.createElement('div', 'change-units si', '&deg;C', '.control-left');
    this.createElement('div', 'change-units us', '&deg;F', '.control-left');
    this.createElement('form', 'search', '', `.${this.className}-control`, '#');
    this.createElement('input', 'input', '', '.search', null, 'text', 'Search city');
    this.createElement('input', 'submit', '', '.search', null, 'submit', null, 'Search');

    this.createElement('div', 'geo-container', '', '.app-weather');
    this.createElement('div', 'geo transl', 'count', '.geo-container');
    this.createElement('div', 'calendar transl', 'calendar', '.geo-container');
    this.createElement('div', 'time', 'time', '.geo-container');

    this.createElement('div', 'weat-now', '', '.app-weather');
    this.createElement('div', 'temp-now unit', 'temp', '.weat-now');
    this.createElement('div', 'descrip-now', '', '.weat-now');
    this.createElement('div', 'icon-now', '', '.descrip-now');
    this.createElement('div', 'code-now transl', 'code', '.descrip-now');
    this.createElement('div', 'feels-like-now transl', 'feels', '.descrip-now');
    this.createElement('div', 'wind-now transl', 'wind', '.descrip-now');
    this.createElement('div', 'humidity-now transl', 'humid', '.descrip-now');

    this.createElement('div', 'weather-days', '', '.app-weather');
    this.createElement('div', 'day', '', '.weather-days');
    this.createElement('div', 'day', '', '.weather-days');
    this.createElement('div', 'day', '', '.weather-days');

    this.createElement('div', 'map', '', `.${this.className}-map`, null, null, null, null, 'map');
    this.createElement('div', 'lat-long', '', '.app-map');
    this.createElement('div', 'lat transl', '', '.lat-long');
    this.createElement('div', 'long transl', '', '.lat-long');
  }

  content() {
    setInterval(() => {
      const clock = new Date();
      const time = document.querySelector('.time');
      time.innerHTML = `${`0${clock.getHours()}`.slice(-2)}:${`0${clock.getMinutes()}`.slice(-2)}:${`0${clock.getSeconds()}`.slice(-2)}`;
    }, 1000);

    document.querySelector(`.${this.className}`).addEventListener('loadGeo', () => {
      this.loadGeo();
    });

    document.querySelector(`.${this.className}`).addEventListener('loadWeather', () => {
      this.loadWeather();
      const translate = new Translate();
      translate.translate();
    });

    document.querySelector(`.${this.className}`).addEventListener('loadImg', () => {
      document.querySelector(`.${this.className}`).style.backgroundImage = `url(${sessionStorage.image})`;
    });
  }

  icons(iconNow, stackWeatNow, stackWeatDays) {
    const iconDays = document.querySelectorAll('.icon-days');

    if (stackWeatNow.code === 'clear' || stackWeatNow.code === 'mostly_clear' || stackWeatNow.code === 'partly_cloudy') {
      if (this.date.getHours() > 6 && this.date.getHours() < 20) {
        iconNow.style.backgroundImage = `url(./weather_icon/${stackWeatNow.code}_day.svg)`;
      } else {
        iconNow.style.backgroundImage = `url(./weather_icon/${stackWeatNow.code}_night.svg)`;
      }
    } else {
      iconNow.style.backgroundImage = `url(./weather_icon/${stackWeatNow.code}.svg)`;
    }

    iconDays.forEach((el, indx) => {
      el.style.backgroundImage = `url(./weather_icon/${stackWeatDays[indx].weatherCode}.svg)`;
    });
  }

  loadWeather() {
    const tempNow = document.querySelector('.temp-now');
    const code = document.querySelector('.code-now');
    const feels = document.querySelector('.feels-like-now');
    const wind = document.querySelector('.wind-now');
    const humid = document.querySelector('.humidity-now');
    const days = document.querySelectorAll('.day');
    const iconNow = document.querySelector('.icon-now');

    const stackWeatNow = JSON.parse(sessionStorage.weatherNow);
    const stackWeatDays = JSON.parse(sessionStorage.weatherFurther);

    tempNow.innerHTML = `${stackWeatNow.temp}`.includes('-') ? `${stackWeatNow.temp}&deg;` : `+${stackWeatNow.temp}&deg;`;
    code.innerHTML = `${stackWeatNow.code[0].toUpperCase()}${stackWeatNow.code.replace(/_/g, ' ').slice(1)}`;
    feels.innerHTML = `${stackWeatNow.temp}`.includes('-') ? `Feels like: ${stackWeatNow.temp}&deg;` : `Feels like: +${stackWeatNow.temp}&deg;`;
    wind.innerHTML = `Wind: ${stackWeatNow.wind}`;
    humid.innerHTML = `Humidity: ${stackWeatNow.humidity}%`;

    days.forEach((el, indx) => {
      const temp = `${stackWeatDays[indx].temp}`.includes('-') ? `${stackWeatDays[indx].temp}` : `+${stackWeatDays[indx].temp}`;
      const calcDay = this.date.getDay() + indx;
      const lengthWeek = Object.keys(monthsDay.daysFull).length;
      const dayIndx = calcDay >= lengthWeek ? calcDay - lengthWeek : calcDay;

      el.innerHTML = `<div class='name-day transl'>${monthsDay.daysFull[dayIndx]}</div>
                        <div class=temp-icon-days unit>
                          <div class=temp-days>${temp}&deg;</div>
                          <div class=icon-days></div>
                        </div>`;
    });

    this.icons(iconNow, stackWeatNow, stackWeatDays);
  }

  loadGeo() {
    const calendar = document.querySelector('.calendar');
    const geo = document.querySelector('.geo');
    const stackGeo = JSON.parse(sessionStorage.geo);
    const { lat } = JSON.parse(sessionStorage.getItem('geo'));
    const { long } = JSON.parse(sessionStorage.getItem('geo'));
    const latStr = document.querySelector('.lat');
    const longStr = document.querySelector('.long');

    geo.innerHTML = `${stackGeo.city}, ${stackGeo.count}`;
    calendar.innerHTML = `${monthsDay.days[this.date.getDay()]} ${this.date.getDate()} ${monthsDay.months[this.date.getMonth()]}`;
    latStr.innerHTML = `Latitude: ${lat.split('.')[0]}&deg;${lat.split('.')[1].slice(0, 2)}'`;
    longStr.innerHTML = `Longitude: ${long.split('.')[0]}&deg;${long.split('.')[1].slice(0, 2)}'`;
  }
}
