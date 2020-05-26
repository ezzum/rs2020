import Background from './background';

export default class Weather {
  constructor() {
    this.key = 'MvuDljdJQHHWy9rTnFQbx3XDECDK7j1w';
  }

  getWeatherNow() {
    const { lat } = JSON.parse(sessionStorage.getItem('geo'));
    const { long } = JSON.parse(sessionStorage.getItem('geo'));
    const units = localStorage.getItem('units');
    const urlNow = `https://api.climacell.co/v3/weather/realtime?lat=${lat}&lon=${long}&unit_system=${units}&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=${this.key}`;

    fetch(urlNow)
      .then((response) => response.json())
      .then((data) => {
        const weatherNow = {
          feels_like: data.feels_like.value,
          humidity: data.humidity.value,
          temp: data.temp.value,
          code: data.weather_code.value,
          wind: data.wind_speed.value,
        };
        sessionStorage.setItem('weatherNow', JSON.stringify(weatherNow));

        this.getWeatherFurther(lat, long, units);
      });
  }

  getWeatherFurther(lat, long, units) {
    const url = `https://api.climacell.co/v3/weather/forecast/daily?lat=${lat}&lon=${long}&unit_system=${units}&start_time=now&fields=temp%2Cweather_code&apikey=${this.key}`;
    const event = new Event('loadWeather');

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.length = 3;
        const weatherFurther = {
          0: {
            temp: Math.round((data[0].temp[0].min.value + data[0].temp[1].max.value) / 2),
            weatherCode: data[0].weather_code.value,
          },
          1: {
            temp: Math.round((data[1].temp[0].min.value + data[1].temp[1].max.value) / 2),
            weatherCode: data[1].weather_code.value,
          },
          2: {
            temp: Math.round((data[2].temp[0].min.value + data[2].temp[1].max.value) / 2),
            weatherCode: data[2].weather_code.value,
          },
        };
        sessionStorage.setItem('weatherFurther', JSON.stringify(weatherFurther));
        document.querySelector('.app').dispatchEvent(event);

        const background = new Background();
        background.getImage();
      });
  }
}
