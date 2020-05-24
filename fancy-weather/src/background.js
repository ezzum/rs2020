export default class Background {
  constructor() {
    this.key = 'o2h5xaDXAumXpc4rNhG7WjMgWqKqLH2w3TQhgC7LxVc';
  }

  getImage() {
    const weatherCode = JSON.parse(sessionStorage.getItem('weatherNow')).code;
    const heightImg = window.innerHeight;
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=weather-${weatherCode}&client_id=${this.key}`;
    const event = new Event('load');

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem('image', `${data.urls.raw}&h=${heightImg}`);

        document.querySelector('.app').dispatchEvent(event);
      })
      .finally(() => {
        setTimeout(() => {
          document.querySelector('.icon-change').classList.remove('spin');
        }, 1000);
      });
  }
}
