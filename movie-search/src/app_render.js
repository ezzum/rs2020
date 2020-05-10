class AppRender {
  constructor(target, appCont, head, main, footer) {
    this.target = target;
    this.appCont = appCont;
    this.headBlock = head;
    this.mainBlock = main;
    this.footerBlock = footer;
  }

  createElement(tag, className, inner, src, selector = this.target, index = 0) {
    const elem = document.createElement(tag);
    if (className) elem.className = className;
    if (inner) elem.innerHTML = inner;
    if (src) elem.src = src;
    document.querySelectorAll(selector)[index].append(elem);
    return elem;
  }

  app() {
    this.createElement('div', this.appCont, '', '', this.target);
    this.createElement('div', this.headBlock, '', '', `.${this.appCont}`);
    this.createElement('h1', `${this.headBlock}Text`, 'Movie Search', '', `.${this.headBlock}`);
    this.createElement('div', this.mainBlock, '', '', `.${this.appCont}`);
    this.form();
    this.createElement('div', 'note', '', '', `.${this.mainBlock}`);
    this.createElement('div', 'swiper-wrapper query', '', '', `.${this.mainBlock}`);
    this.createElement('div', 'control', '', '', `.${this.mainBlock}`);
    this.createElement('div', 'left', '', '', '.control');
    this.createElement('div', 'right', '', '', '.control');
    this.createElement('div', 'note-error', '', '', `.${this.mainBlock}`);
    this.createElement('div', this.footerBlock, '', '', `.${this.appCont}`);
    this.createElement('div', 'loader', '', '', `.${this.appCont}`);
  }

  form() {
    const form = document.createElement('form');
    form.action = '#';
    form.className = 'form';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ' Search movie';
    input.autofocus = 'true';
    input.className = 'input';

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Search';
    submit.className = 'submit';

    document.querySelector(`.${this.mainBlock}`).append(form);
    this.createElement('div', 'inp-cont', '', '', '.form');
    document.querySelector('.inp-cont').append(input);
    this.createElement('div', 'clear', '', '', '.inp-cont');
    this.createElement('div', 'keyboard', '', '', '.inp-cont');
    document.querySelector('.form').append(submit);
    return form;
  }
}

export default AppRender;
