const mapboxgl = require('mapbox-gl/dist/mapbox-gl');

export default class Map {
  constructor() {
    this.key = 'pk.eyJ1IjoibGloYWNoIiwiYSI6ImNrYW4xcGt5dzBwa3cyeHF3Mm9ydjVoZ2UifQ.7fEDjn-gFn-bmC5ZfiLTBQ';
  }

  getMap() {
    document.querySelector('.app').addEventListener('loadGeo', () => {
      const { lat } = JSON.parse(sessionStorage.getItem('geo'));
      const { long } = JSON.parse(sessionStorage.getItem('geo'));

      mapboxgl.accessToken = this.key;
      const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [long, lat], // starting position [lng, lat]
        zoom: 8, // starting zoom
      });

      const marker = new mapboxgl.Marker();
      marker.setLngLat([long, lat]);
      marker.addTo(map);
    });
  }
}
