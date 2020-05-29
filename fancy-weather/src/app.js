import Storage from './storage';
import Geo from './geo';
import AppRender from './appRender';
import Action from './action';
import Map from './map';

const storage = new Storage();
storage.setStorage();

const appRender = new AppRender('app');
appRender.render();
appRender.content();

const geo = new Geo();
geo.getGeo();

const action = new Action();
action.changeImage();
action.units();
action.changeLang();
action.submit();

const map = new Map();
map.getMap();
