import cards from './card';
import AppContainer from './app-container';
import Header from './header';
import ButtMenu from './butt_menu';
import Main from './main';
import Menu from './menu';
import Categories from './categories';

const appContainer = new AppContainer('body', 'container');
appContainer.render();

const header = new Header(appContainer.selector, `header-${appContainer.selector}`);
header.render();

const main = new Main(appContainer.selector, `main-${appContainer.selector}`);
main.render();

const buttMenu = new ButtMenu(header.selector, 'butt_menu');
buttMenu.render();
buttMenu.click();

const menu = new Menu(cards[0], header.selector, 'nav_bar');
menu.render();

const categories = new Categories(main.selector, 'category', cards);
categories.renderCat();
categories.click();
