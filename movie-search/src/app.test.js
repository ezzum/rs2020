import AppRender from './app_render';

const appRender = new AppRender('body', 'app-container', 'header', 'swiper-container', 'footer');
appRender.app();

test('Object is defined', () => {
  expect(appRender.createElement('div', 'slide', '', '', 'body')).toBeDefined();
});

test('Object is defined', () => {
  expect(appRender.form()).toBeDefined();
});