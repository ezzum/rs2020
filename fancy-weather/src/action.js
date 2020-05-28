import Background from './background';
import Weather from './weather';

export default class Action {
  constructor() {
    this.changeImg = document.querySelector('.change-image');
    this.iconChange = document.querySelector('.icon-change');
    this.currentUnits = localStorage.units;
  }

  changeImage() {
    this.changeImg.addEventListener('click', () => {
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

    si.addEventListener('click', () => {
      si.classList.add('active');
      us.classList.remove('active');
      localStorage.units = 'si';
      weather.getWeatherNow();
    });
    us.addEventListener('click', () => {
      us.classList.add('active');
      si.classList.remove('active');
      localStorage.units = 'us';
      weather.getWeatherNow();
    });
  }
}
