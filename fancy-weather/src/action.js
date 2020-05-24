import Background from './background';

export default class Action {
  constructor() {
    this.changeImg = document.querySelector('.change-image');
    this.iconChange = document.querySelector('.icon-change');
  }

  changeImage() {
    this.changeImg.addEventListener('click', () => {
      this.iconChange.classList.add('spin');
      const background = new Background();
      background.getImage();
    });
  }
}
