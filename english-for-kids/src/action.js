import CardPage from './card_page';
import Categories from './categories';
import cards from './card';

class Action {
  constructor(array) {
    this.array = array;
    this.click = 'click';
    this.currentCat = null;
  }

  buttMenuClick() {
    document.querySelector('.butt_menu').addEventListener(this.click, () => {
      const trans = document.querySelector('.butt_menu').style.transform;
      const menuLeft = document.querySelector('.nav_bar').style.left;
      document.querySelector('.butt_menu').style.transform = trans === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
      document.querySelector('.nav_bar').style.left = menuLeft === '0px' ? '-400px' : '0px';
    });
  }

  elementClick() {
    document.querySelector('.main-container').addEventListener(this.click, (event) => {
      if (event.target.className === 'main-container') return;

      if (document.querySelector('.main-container').className === 'main-container') {
        document.querySelectorAll('.category').forEach((el) => {
          el.remove();
        });

        document.querySelector('.main-container').classList.add('cards');

        const cardPage = new CardPage('main-container', 'category', this.array, event.target.id);
        cardPage.renderCard();

        this.currentCat = event.target.id;

        return;
      }

      if (event.target.className === 'rotate') {
        document.querySelectorAll('.category')[event.target.parentElement.id].style.transform = 'rotateY(180deg)';
        document.querySelectorAll('.category')[event.target.parentElement.id].addEventListener('mouseleave', () => {
          document.querySelectorAll('.category')[event.target.parentElement.id].style.transform = 'rotateY(0deg)';
        });
      }
      if (event.target.className.endsWith('card')) {
        const audio = new Audio();
        audio.src = `./src/${this.array[this.currentCat][event.target.parentElement.id].audioSrc}`;
        audio.play();
      }
    });
  }

  menuClick() {
    document.querySelector('.nav_bar').addEventListener(this.click, (event) => {
      if (event.target.className === 'nav_bar') return;

      document.querySelector('.nav_bar').style.left = '-400px';
      document.querySelectorAll('.nav_bar-item').forEach((el) => {
        el.classList.remove('active');
      });
      document.querySelectorAll('.nav_bar-item')[event.target.id].classList.add('active');

      document.querySelectorAll('.category').forEach((el) => {
        el.remove();
      });

      if (event.target.id === '0') {
        document.querySelector('.main-container').classList.remove('cards');
        const categories = new Categories('main-container', 'category', cards);
        categories.renderCat();
        return;
      }

      document.querySelector('.main-container').classList.add('cards');

      const cardPage = new CardPage('main-container', 'category', this.array, event.target.id);
      cardPage.renderCard();

      this.currentCat = event.target.id;
    });
  }
}

export default Action;
