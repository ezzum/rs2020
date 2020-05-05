import GetMovie from './get_movie';

class Search {
  constructor() {
    this.query = '';
    this.click = 'click';
  }

  submit() {
    document.querySelector('.submit').addEventListener(this.click, () => {
      this.query = document.querySelector('.input').value;

      const getMovie = new GetMovie(this.query);
      getMovie.movie();
    });
  }

  clear() {
    document.querySelector('.clear').addEventListener(this.click, () => {
      document.querySelector('.input').value = '';
    });
  }
}

export default Search;
