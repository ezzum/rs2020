import country from './country';
import Weather from './weather';

export default class Geo {
  constructor() {
    this.key = '3970a171d191a9';
  }

  getGeo() {
    const url = `https://ipinfo.io/json?token=${this.key}`;
    const event = new Event('loadGeo');

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const geo = {
          city: data.city,
          count: country[data.country],
          lat: (data.loc.split(','))[0],
          long: (data.loc.split(','))[1],
          timezone: data.timezone,
        };

        sessionStorage.setItem('geo', JSON.stringify(geo));
        document.querySelector('.app').dispatchEvent(event);

        const weather = new Weather();
        weather.getWeatherNow('geo');
      });
  }
}
