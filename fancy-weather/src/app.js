import Geo from './geo';
import AppRender from './appRender';
import Action from './action';
import Map from './map';

localStorage.setItem('lang', 'en');
localStorage.setItem('units', 'si');

const appRender = new AppRender('app');
appRender.render();
appRender.content();

const geo = new Geo();
geo.getGeo();

const action = new Action();
action.changeImage();

const map = new Map();
map.getMap();
