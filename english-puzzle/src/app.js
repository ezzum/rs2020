import AppRender from './render';
import Action from './action';
import Check from './check';

const rend = new AppRender();
rend.render();

const action = new Action();
action.start();
action.signUpSubmit();

const check = new Check();
check.checkSignIn();
