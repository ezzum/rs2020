import GetMovie from './get_movie';

class Swiper {
  constructor(query) {
    this.query = query;
    this.moveLeft = document.querySelector('.left');
    this.moveRight = document.querySelector('.right');
    this.slides = '';
    this.positionSlide = '';
    this.posLastSlide = '';
    this.lastSlideVisible = false;
    this.widthSlide = 300;
  }

  constants() {
    this.slides = document.querySelectorAll('.swiper-slide');
    this.positionSlide = parseInt(document.querySelector('.swiper-slide').style.left, 10);
    this.posLastSlide = document.querySelector('.swiper-wrapper>:last-child').offsetLeft;
  }

  right() {
    this.moveRight.addEventListener('click', () => {
      this.constants();

      if (document.querySelector('.loader').className === 'loader hide') {
        this.slides.forEach((elem) => {
          elem.style.left = `${this.positionSlide - this.widthSlide}px`;
        });
      }

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

  checkPosLastSlide() {
    const containerWidth = document.querySelector('.swiper-container').clientWidth;
    const query = document.querySelector('.swiper-wrapper').classList[1];
    const page = parseInt(document.querySelector('.swiper-wrapper').id, 10) + 1;

    if (containerWidth + this.widthSlide > this.posLastSlide && this.lastSlideVisible === false) {
      this.lastSlideVisible = true;
      const getMovie = new GetMovie(query, page);
      getMovie.translate();
      this.lastSlideVisible = false;
    }
  }
}

export default Swiper;
