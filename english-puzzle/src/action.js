import Query from './query';

export default class Action {
  constructor() {
    this.click = 'click';
    this.signUp = document.querySelector('.sign-up');
    this.signUpSubmitButton = document.querySelector('.sign-up-sabmit');
    this.startButton = document.querySelector('.start-button');
    this.startScreen = document.querySelector('.start-screen');
    this.puzzleScreen = document.querySelector('.puzzle-screen');
  }

  start() {
    this.startButton.addEventListener(this.click, () => {
      this.startScreen.classList.remove('visible');
      this.puzzleScreen.classList.add('visible');
    });
  }

  signUpSubmit() {
    this.signUpSubmitButton.addEventListener(this.click, (event) => {
      event.preventDefault();
      const email = document.querySelector('.email').value;
      const password = document.querySelector('.pass').value;
      const user = {
        email,
        password,
      };

      if (email && password) {
        this.signUp.classList.add('loader');

        const query = new Query(user);
        query.signUp();
      }
    });
  }
}
