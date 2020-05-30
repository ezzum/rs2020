import Search from './search';

export default class Geo {
  constructor() {
    this.key = '3970a171d191a9';
  }

  getGeo() {
    const url = `https://ipinfo.io/json?token=${this.key}`;
    const search = new Search();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        search.search(data.city);
      })
      .catch((err) => {
        document.querySelector('.app-error').innerHTML = `Geolocation: '${err}'`;
      });
  }
}
