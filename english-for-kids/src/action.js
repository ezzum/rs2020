import CardPage from './card_page';
import Categories from './categories';
import cards from './card';

class Action {
  constructor(array) {
    this.array = array;
    this.click = 'click';
    this.currentCat = null;
    this.menuLeft = '';
  }

  buttMenuClick() {
    document.querySelector('.butt_menu').addEventListener(this.click, () => {
      // const trans = document.querySelector('.butt_menu').style.transform;
      const menuLeft = document.querySelector('.nav_bar').style.left;
      const menuBack = document.querySelector('.menu-back').style.display;
      // document.querySelector('.butt_menu').style.transform = trans === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
      this.transformButtMenu();

      document.querySelector('.nav_bar').style.left = menuLeft === '0px' ? '-400px' : '0px';
      document.querySelector('.menu-back').style.display = menuBack === 'none' ? 'block' : 'none';

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

        document.querySelectorAll('.nav_bar-item').forEach((el) => {
          el.classList.remove('active');
        });
        document.querySelectorAll('.nav_bar-item')[event.target.id].classList.add('active');

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

      this.transformButtMenu();

      document.querySelector('.nav_bar').style.left = '-400px';
      document.querySelector('.menu-back').style.display = 'none';
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

    document.querySelector('.menu-back').addEventListener(this.click, () => {
      this.transformButtMenu();
      document.querySelector('.nav_bar').style.left = '-400px';
      document.querySelector('.menu-back').style.display = 'none';
    });
  }

  transformButtMenu() {
    this.menuLeft = document.querySelector('.nav_bar').style.left;

    if (this.menuLeft === '-400px') {
      document.querySelector('.line1').style.opacity = '0';
      document.querySelector('.line0').style.transform = 'rotate(45deg)';
      document.querySelector('.line0').style.top = '-4px';
      document.querySelector('.line2').style.transform = 'rotate(-45deg)';
    } else {
      document.querySelector('.line1').style.opacity = '1';
      document.querySelector('.line0').style.transform = 'rotate(0deg)';
      document.querySelector('.line0').style.top = '0px';
      document.querySelector('.line2').style.transform = 'rotate(0deg)';
    }
  }
}

export default Action;
