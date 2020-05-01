import GetMovie from './get_movie';

class Search {
  constructor() {
    this.query = '';
    this.click = 'click';
  }

  submit() {
    document.querySelector('.submit').addEventListener(this.click, () => {
      this.query = document.querySelector('.input').value;

      document.querySelector('.note').innerHTML = `Results for: "${this.query}"`;

      document.querySelector('.slider').innerHTML = '';

      const getMovie = new GetMovie(this.query);
      getMovie.movie();
    });
  }
}

export default Search;
