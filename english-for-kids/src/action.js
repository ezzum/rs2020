import CardPage from './card_page';
import Categories from './categories';
import cards from './card';

class Action {
  constructor(array) {
    this.array = array;
    this.click = 'click';
    this.currentCat = null;
    this.menuLeft = '';
    this.shuffle = [];
    this.currentCard = null;
    this.src = './src/';
  }

  buttMenuClick() {
    document.querySelector('.butt_menu').addEventListener(this.click, () => {
      const menuLeft = document.querySelector('.nav_bar').style.left;
      const menuBack = document.querySelector('.menu-back').style.display;
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
      if (event.target.className.endsWith('card') && document.querySelector('.mode').innerHTML === 'TRAIN') {
        const audio = new Audio();
        audio.src = `./src/${this.array[this.currentCat][event.target.parentElement.id].audioSrc}`;
        audio.play();
      }
      if (document.querySelector('.mode').innerHTML === 'PLAY' && document.querySelector('.start')) {
        this.startGame(event);
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

      if (document.querySelector('.start')) {
        document.querySelector('.start').remove();
      }

      if (event.target.id === '0') {
        document.querySelector('.main-container').classList.remove('cards');
        document.querySelector('.main-container').id = 0;
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

  switchClick() {
    document.querySelector('.switch').addEventListener(this.click, () => {
      if (document.querySelector('.mode').innerHTML === 'TRAIN') {
        document.querySelector('.mode').style.left = '50px';
        document.querySelector('.mode').innerHTML = 'PLAY';
        document.querySelector('.handle').style.left = '-80px';
        document.querySelector('.switch').className = 'switch play';
        document.querySelectorAll('.category').forEach((el) => {
          el.classList.add('cat-play');
        });
        document.querySelectorAll('.rotate').forEach((el) => {
          el.classList.add('hide');
        });
        document.querySelectorAll('.descrip-card').forEach((el) => {
          el.classList.add('hide');
        });
        document.querySelectorAll('.img-card').forEach((el) => {
          el.classList.add('img-play');
        });
        if (document.querySelector('.name-category').innerHTML !== 'Main Page') {
          const start = document.createElement('div');
          start.className = 'start';
          start.innerHTML = 'Start Game';
          document.querySelector('.main-container').append(start);
        }
      } else {
        document.querySelector('.mode').style.left = '0px';
        document.querySelector('.mode').innerHTML = 'TRAIN';
        document.querySelector('.handle').style.left = '0px';
        document.querySelector('.switch').className = 'switch train';
        document.querySelectorAll('.category').forEach((el) => {
          el.classList.remove('cat-play');
        });
        document.querySelectorAll('.rotate').forEach((el) => {
          el.classList.remove('hide');
        });
        document.querySelectorAll('.descrip-card').forEach((el) => {
          el.classList.remove('hide');
        });
        document.querySelectorAll('.img-card').forEach((el) => {
          el.classList.remove('img-play');
        });
        if (document.querySelector('.name-category').innerHTML !== 'Main Page') {
          document.querySelector('.start').remove();
        }
        if (document.querySelector('.rating')) {
          document.querySelector('.rating').innerHTML = '';
        }
        document.querySelectorAll('.img-card').forEach((el) => {
          el.style.opacity = '1';
          el.style.cursor = 'pointer';
        });
      }
    });
  }

  startGame(event) {
    if (event.target.className === 'rating') return;
    if (event.target.className.includes('main-container')) return;
    if (event.target.className === 'img-card img-play' && document.querySelector('.start').innerHTML === 'Start Game') return;
    if (event.target.className === 'start') {
      document.querySelector('.start').classList.add('start-push');
      document.querySelector('.start').innerHTML = 'Repeat';

      const shuffle = (array) => array.sort(() => Math.random() - 0.5);
      const arr = [0, 1, 2, 3, 4, 5, 6, 7];
      this.shuffle = shuffle(arr);
    }

    if (event.target.style.opacity === '0.5') return;


    if (event.target.className.includes('card') && document.querySelector('.start').innerHTML === 'Repeat' && event.target.style.opacity === '1') {
      if (parseInt(event.target.parentElement.id, 10) === this.currentCard) {
        const starWin = document.createElement('img');
        starWin.src = './src/img/star-win.svg';
        starWin.className = 'correctly';
        document.querySelector('.rating').prepend(starWin);
        const audio = new Audio();
        audio.src = './src/audio/correct.mp3';
        audio.play();
        event.target.style.opacity = '0.5';
        event.target.style.cursor = 'default';
      } else {
        const star = document.createElement('img');
        star.src = './src/img/star.svg';
        star.className = 'wrong';
        document.querySelector('.rating').prepend(star);
        const audio = new Audio();
        audio.src = './src/audio/error.mp3';
        audio.play();
        return;
      }
    }

    if (this.shuffle.length === 0) {
      setTimeout(() => {
        document.querySelectorAll('.category').forEach((el) => {
          el.remove();
        });
        this.resultGame();
      }, 1000);
      document.querySelector('.main-container').classList.remove('cards');

      setTimeout(() => {
        document.querySelector('.main-container').style.flexDirection = '';
        document.querySelector('.res-rating').remove();

        const categories = new Categories('main-container', 'category', cards);
        categories.renderCat();
      }, 4000);
      return;
    }

    if (document.querySelector('.start').innerHTML === 'Repeat') {
      if (event.target.className.includes('game-run')) {
        const audio = new Audio();
        audio.src = `./src/${this.array[this.currentCat][this.currentCard].audioSrc}`;
        audio.play();
        return;
      }
      document.querySelector('.start').classList.add('game-run');
      this.currentCard = this.shuffle.shift();
      setTimeout(() => {
        const audio = new Audio();
        audio.src = `./src/${this.array[this.currentCat][this.currentCard].audioSrc}`;
        audio.play();
      }, 1000);
    }
  }

  resultGame() {
    const { length } = document.querySelectorAll('.wrong');
    if (length > 0) {
      document.querySelector('.start').remove();
      document.querySelector('.rating').remove();

      const audio = new Audio();
      audio.src = `${this.src}audio/failure.mp3`;
      audio.play();

      const fail = document.createElement('img');
      fail.className = 'result-img';
      fail.src = `${this.src}img/failure.jpg`;
      document.querySelector('.main-container').append(fail);

      const resultRating = document.createElement('p');
      resultRating.className = 'res-rating';
      resultRating.innerHTML = length > 1 ? `${length} Errors` : `${length} Error`;
      document.querySelector('.main-container').append(resultRating);

      document.querySelector('.main-container').style.flexDirection = 'column';
    } else {
      document.querySelector('.start').remove();
      document.querySelector('.rating').remove();

      const audio = new Audio();
      audio.src = `${this.src}audio/success.mp3`;
      audio.play();

      const win = document.createElement('img');
      win.className = 'result-img';
      win.src = `${this.src}img/success.jpg`;
      document.querySelector('.main-container').append(win);

      const resultRating = document.createElement('p');
      resultRating.className = 'res-rating';
      resultRating.innerHTML = 'Win!';
      document.querySelector('.main-container').append(resultRating);

      document.querySelector('.main-container').style.flexDirection = 'column';
    }
  }
}

export default Action;
