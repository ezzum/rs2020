export default class Action {
  constructor() {
    this.click = 'click';
    this.startButton = document.querySelector('.start-button');
    this.startScreen = document.querySelector('.start-screen');
    this.puzzleScreen = document.querySelector('.puzzle-screen');
  }

  start() {
    this.startButton.addEventListener(this.click, () => {
      this.startScreen.classList.add('hide');
      this.puzzleScreen.classList.add('visible');
    });
  }
}
