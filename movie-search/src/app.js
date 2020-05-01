import AppRender from './app_render';
import GetMovie from './get_movie';
import Submit from './submit';

const appRender = new AppRender('body', 'app-container', 'header', 'main', 'footer');
appRender.app();

const movie = new GetMovie('terminator');
movie.movie();

const submit = new Submit();
submit.search();
