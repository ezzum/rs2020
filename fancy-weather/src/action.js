import Background from './background';
import Translate from './translate';
import AppRender from './appRender';
import Weather from './weather';
import Search from './search';

export default class Action {
  constructor() {
    this.changeImg = document.querySelector('.change-image');
    this.iconChange = document.querySelector('.icon-change');
    this.changeLg = document.querySelector('.change-lang');
    this.currentUnits = localStorage.units;
    this.click = 'click';
  }

  changeImage() {
    this.changeImg.addEventListener(this.click, () => {
      this.iconChange.classList.add('spin');
      const background = new Background();
      background.getImage();
    });
  }

  units() {
    const si = document.querySelector('.si');
    const us = document.querySelector('.us');
    const weather = new Weather();

    document.querySelector(`.${this.currentUnits}`).classList.add('active');

    si.addEventListener(this.click, () => {
      si.classList.add('active');
      us.classList.remove('active');
      localStorage.units = 'si';
      weather.getWeatherNow();
    });
    us.addEventListener(this.click, () => {
      us.classList.add('active');
      si.classList.remove('active');
      localStorage.units = 'us';
      weather.getWeatherNow();
    });
  }

  changeLang() {
    this.changeLg.addEventListener('change', (event) => {
      const lang = event.target.selectedOptions[0].className;
      localStorage.lang = lang;

      const appRender = new AppRender('app');
      appRender.loadGeo();
      appRender.loadWeather();

      const translate = new Translate();
      translate.translate();
    });
  }

  submit() {
    document.querySelector('.submit').addEventListener(this.click, () => {
      const query = document.querySelector('.input').value;
      const search = new Search();
      search.search(query);
    });
  }
}
