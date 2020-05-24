import Geo from './geo';
import AppRender from './appRender';
import Action from './action';

localStorage.setItem('lang', 'en');
localStorage.setItem('units', 'si');

const appRender = new AppRender('app');
appRender.render();
appRender.content();

const geo = new Geo();
geo.getGeo();

const action = new Action();
action.changeImage();
