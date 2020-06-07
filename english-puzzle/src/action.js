export default class Action {
  constructor() {
    this.click = 'click';
    this.startButton = document.querySelector('.start-button');
    this.startScreen = document.querySelector('.start-screen');
  }

  start() {
    this.startButton.addEventListener(this.click, () => {
      this.startScreen.classList.add('hide');
    });
  }
}
