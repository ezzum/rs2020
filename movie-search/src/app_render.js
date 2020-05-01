class AppRender {
  constructor(target, appCont, head, main, footer) {
    this.target = target;
    this.appCont = appCont;
    this.headBlock = head;
    this.mainBlock = main;
    this.footerBlock = footer;
  }

  app() {
    const app = document.createElement('div');
    app.className = this.appCont;

    document.querySelector(`${this.target}`).append(app);

    this.header();
    this.main();
    this.footer();
  }

  header() {
    const head = document.createElement('div');
    head.className = this.headBlock;

    const headText = document.createElement('h1');
    headText.innerHTML = 'Movie Search';
    headText.className = `${this.headBlock}Text`;

    document.querySelector(`.${this.appCont}`).append(head);
    document.querySelector(`.${this.headBlock}`).append(headText);
  }

  main() {
    const main = document.createElement('div');
    main.className = this.mainBlock;

    document.querySelector(`.${this.appCont}`).append(main);


    const form = document.createElement('form');
    form.action = '#';
    form.className = 'form';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = ' Search movie';
    input.className = 'input';

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Search';
    submit.className = 'submit';

    document.querySelector(`.${this.mainBlock}`).append(form);
    document.querySelector('.form').append(input);
    document.querySelector('.form').append(submit);

    const note = document.createElement('div');
    note.className = 'note';
    document.querySelector(`.${this.mainBlock}`).append(note);

    const slider = document.createElement('div');
    slider.className = 'slider';

    document.querySelector(`.${this.mainBlock}`).append(slider);
  }

  footer() {
    const footer = document.createElement('div');
    footer.className = this.footerBlock;

    document.querySelector(`.${this.appCont}`).append(footer);
  }
}

export default AppRender;
