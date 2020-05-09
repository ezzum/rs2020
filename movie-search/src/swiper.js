import GetMovie from './get_movie';

class Swiper {
  constructor(query) {
    this.query = query;
    this.moveLeft = document.querySelector('.left');
    this.moveRight = document.querySelector('.right');
    this.swiper = document.querySelector('.swiper-wrapper');
    this.slides = '';
    this.positionSlide = '';
    this.posLastSlide = '';
    this.lastSlideVisible = false;
    this.widthSlide = 300;
    this.offset = 500;
  }

  constants() {
    this.slides = document.querySelectorAll('.swiper-slide');
    this.positionSlide = parseInt(document.querySelector('.swiper-slide').style.left, 10);
    this.posLastSlide = document.querySelector('.swiper-wrapper>:last-child').offsetLeft;
  }

  right() {
    this.moveRight.addEventListener('click', () => {
      this.constants();

      this.slides.forEach((elem) => {
        elem.style.left = `${this.positionSlide - this.widthSlide}px`;
      });

      this.checkPosLastSlide();
    });
  }

  left() {
    this.moveLeft.addEventListener('click', () => {
      this.constants();

      if (this.positionSlide < 0) {
        this.slides.forEach((elem) => {
          elem.style.left = `${this.positionSlide + this.widthSlide}px`;
        });
      }
    });
  }

  swipe() {
    let origin;

    const move = (event) => {
      event.preventDefault();
      this.slides.forEach((elem) => {
        elem.style.left = `${this.positionSlide - (origin - event.touches[0].pageX)}px`;
      });
    };

    this.swiper.addEventListener('touchstart', (event) => {
      this.checkPosLastSlide();
      this.constants();

      this.slides.forEach((elem) => {
        elem.classList.add('move');
      });
      origin = event.touches[0].pageX;
      this.swiper.addEventListener('touchmove', move);
    });
    this.swiper.addEventListener('touchend', () => {
      this.slides.forEach((elem) => {
        elem.classList.remove('move');
      });
      this.swiper.removeEventListener('touchmove', move);
    });
  }

  swipeMouse() {
    let origin;
    const swiperBorders = {
      left: document.querySelector('.swiper-wrapper').offsetLeft + 5,
      right: document.querySelector('.swiper-wrapper').offsetLeft + document.querySelector('.swiper-wrapper').clientWidth - 5,
    };

    const move = (event) => {
      event.preventDefault();

      this.slides.forEach((elem) => {
        elem.style.left = `${this.positionSlide - (origin - event.pageX)}px`;
      });

      if (event.pageX < swiperBorders.left || event.pageX > swiperBorders.right) {
        this.swiper.removeEventListener('mousemove', move);
        this.slides.forEach((elem) => {
          elem.classList.remove('move');
        });
      }
    };

    this.swiper.addEventListener('mousedown', (event) => {
      this.checkPosLastSlide();
      this.constants();

      this.slides.forEach((elem) => {
        elem.classList.add('move');
      });
      origin = event.pageX;
      this.swiper.addEventListener('mousemove', move);
    });

    this.swiper.addEventListener('mouseup', () => {
      this.slides.forEach((elem) => {
        elem.classList.remove('move');
      });
      this.swiper.removeEventListener('mousemove', move);
    });
  }

  checkPosLastSlide() {
    const containerWidth = document.querySelector('.swiper-container').clientWidth;
    const query = document.querySelector('.swiper-wrapper').classList[1].replace(/-/g, ' ');
    const page = parseInt(document.querySelector('.swiper-wrapper').id, 10) + 1;

    if (containerWidth + this.offset > this.posLastSlide && this.lastSlideVisible === false) {
      this.lastSlideVisible = true;
      const getMovie = new GetMovie(query, page);
      getMovie.translate();
      this.lastSlideVisible = false;
    }
  }
}

export default Swiper;
