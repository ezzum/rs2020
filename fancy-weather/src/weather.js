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
          code: data.weather_code.value.replace(/_/g, ','),
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
        data.length = 4;
        const weatherFurther = {
          1: {
            tempMin: Math.round(data[1].temp[0].min.value),
            tempMax: Math.round(data[1].temp[1].max.value),
            weatherCode: data[1].weather_code.value,
          },
          2: {
            tempMin: Math.round(data[2].temp[0].min.value),
            tempMax: Math.round(data[2].temp[1].max.value),
            weatherCode: data[2].weather_code.value,
          },
          3: {
            tempMin: Math.round(data[3].temp[0].min.value),
            tempMax: Math.round(data[3].temp[1].max.value),
            weatherCode: data[3].weather_code.value,
          },
        };
        sessionStorage.setItem('weatherFurther', JSON.stringify(weatherFurther));
        document.querySelector('.app').dispatchEvent(event);

        // const background = new Background();
        // background.getImage();
      });
  }
}
