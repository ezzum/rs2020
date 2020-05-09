import AppRender from './app_render';
import GetMovie from './get_movie';
import Search from './search';
import Swiper from './swiper';

const query = 'terminator';
const page = 1;

const appRender = new AppRender('body', 'app-container', 'header', 'swiper-container', 'footer');
appRender.app();

const movie = new GetMovie(query, page);
movie.translate();

const search = new Search();
search.submit();
search.clear();

const swiper = new Swiper(query);
swiper.right();
swiper.left();
swiper.swipe();
swiper.swipeMouse();
