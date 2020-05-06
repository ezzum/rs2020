import AppRender from './app_render';
import GetMovie from './get_movie';
import Search from './search';

const appRender = new AppRender('body', 'app-container', 'header', 'main', 'footer');
appRender.app();

const movie = new GetMovie('terminator', 1);
movie.translate();

const search = new Search();
search.submit();
search.clear();
