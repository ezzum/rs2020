class GetMovie {
  constructor(query, page) {
    this.keyIMDb = 'a48b3198';
    this.query = query;
    this.page = page;
    this.keyYandex = 'trnsl.1.1.20200505T214053Z.061b5b0034487480.75a90f062dcdba72d8fe8cc7a53bf16a75453260';
    this.tag = '';
  }

  movie(query) {
    const url = `https://www.omdbapi.com/?s=${query}&page=${this.page}&type=movie&apikey=${this.keyIMDb}`;
    const loader = document.querySelector('.loader');
    const note = document.querySelector('.note');
    const noteErr = document.querySelector('.note-error');

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          loader.classList.remove('hide');
          document.querySelectorAll('.card').forEach((el) => {
            el.remove();
          });
          for (let i = 0; i < data.Search.length; i += 1) {
            this.createElement('div', 'card hide', '', '', 'slider');
            this.createElement('a', 'title', data.Search[i].Title, '', 'card', i);
            this.createElement('img', 'poster', '',
              data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : '../src/img/no-poster.jpg',
              'card', i);
            this.createElement('p', 'year', data.Search[i].Year, '', 'card', i);
            this.idSearch(i, this.keyIMDb, data);
          }
        } else {
          throw new Error('No data');
        }

        note.innerHTML = `Showing results for: "${this.query}"`;
        noteErr.innerHTML = '';
      })
      .finally(() => {
        setTimeout(() => {
          loader.classList.add('hide');
          document.querySelectorAll('.card').forEach((elem) => {
            elem.classList.remove('hide');
          });
        }, 1000);
      })
      .catch((err) => {
        note.innerHTML = `No results for: "${this.query}"`;
        noteErr.innerHTML = err;
      });
  }

  createElement(tag, className, inner, src, selector, index = 0) {
    const elem = document.createElement(tag);
    elem.className = className;
    if (inner) elem.innerHTML = inner;
    if (src) elem.src = src;
    document.querySelectorAll(`.${selector}`)[index].append(elem);
    this.tag = tag;
  }

  idSearch(i, key, data) {
    const url = `https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${key}`;
    const title = document.querySelectorAll('.title');

    return fetch(url)
      .then((res) => res.json())
      .then((dataId) => {
        title[i].href = `https://www.imdb.com/title/${data.Search[i].imdbID}/videogallery/`;
        this.createElement('p', 'rating', `IMDb Rating ${dataId.imdbRating}`, '', 'card', i);
      });
  }

  translate() {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.keyYandex}&text=${this.query}&lang=en`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.movie(data.text[0]);
      });
  }
}

export default GetMovie;
