import cards from './card';
import AppContainer from './app-container';
import ButtMenu from './butt_menu';
import Menu from './menu';
import Categories from './categories';
import Action from './action';

const appContainer = new AppContainer('body', 'container');
appContainer.render();

const buttMenu = new ButtMenu(appContainer.head.className, 'butt_menu');
buttMenu.render();

const menu = new Menu(cards, appContainer.head.className, 'nav_bar');
menu.render();

const categories = new Categories(appContainer.main.className, 'category', cards);
categories.renderCat();

const action = new Action(cards);
action.buttMenuClick();
action.elementClick();
action.menuClick();
