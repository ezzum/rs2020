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
    this.offset = 1000;
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

    this.swipeLeft();
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

  swipeLeft() {
    let origin;

    const move = (event) => {
      this.slides.forEach((elem) => {
        elem.style.left = `${this.positionSlide - (origin - event.pageX)}px`;
      });
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
    const query = document.querySelector('.swiper-wrapper').classList[1];
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
