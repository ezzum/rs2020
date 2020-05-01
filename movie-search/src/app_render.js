class AppRender {
  constructor(target, appCont, head, main, footer) {
    this.target = target;
    this.appCont = appCont;
    this.headBlock = head;
    this.mainBlock = main;
    this.footerBlock = footer;
  }

  creElem(tag, className, inner, src, selector = this.target, index = 0) {
    const elem = document.createElement(tag);
    elem.className = className;
    if (inner) elem.innerHTML = inner;
    if (src) elem.src = src;
    document.querySelectorAll(selector)[index].append(elem);
  }

  app() {
    this.creElem('div', this.appCont, '', '', this.target);
    this.creElem('div', this.headBlock, '', '', `.${this.appCont}`);
    this.creElem('h1', `${this.headBlock}Text`, 'Movie Search', '', `.${this.headBlock}`);
    this.creElem('div', this.mainBlock, '', '', `.${this.appCont}`);
    this.form();
    this.creElem('div', 'note', '', '', `.${this.mainBlock}`);
    this.creElem('div', 'slider', '', '', `.${this.mainBlock}`);
    this.creElem('div', this.footerBlock, '', '', `.${this.appCont}`);
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
    document.querySelector('.form').append(input);
    document.querySelector('.form').append(submit);
  }
}

export default AppRender;
