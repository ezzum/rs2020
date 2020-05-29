import Weather from './weather';

export default class Search {
  constructor() {
    this.key = 'ac3d7cf00e0b470a874cb637ea11b0a6';
  }

  search(query) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${this.key}&language=en`;
    const weather = new Weather();
    const event = new Event('loadGeo');

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results[0].formatted);
        const geo = {
          city: `${data.results[0].formatted}`.split(',')[0],
          count: data.results[0].components.country,
          lat: `${data.results[0].geometry.lat}`,
          long: `${data.results[0].geometry.lng}`,
          timezone: data.results[0].annotations.timezone.name,
        };

        sessionStorage.setItem('geo', JSON.stringify(geo));
        document.querySelector('.app').dispatchEvent(event);
        weather.getWeatherNow('geo');
      });
  }
}
