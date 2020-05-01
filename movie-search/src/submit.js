import GetMovie from './get_movie';

class Submit {
  constructor() {
    this.query = '';
    this.click = 'click';
  }

  search() {
    document.querySelector('.submit').addEventListener(this.click, () => {
      this.query = document.querySelector('.input').value;

      document.querySelector('.note').innerHTML = `Results for: "${this.query}"`;

      document.querySelector('.slider').innerHTML = '';

      const getMovie = new GetMovie(this.query);
      getMovie.movie();
    });
  }
}

export default Submit;
