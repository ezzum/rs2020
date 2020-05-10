class GetMovie {
  constructor(query, page, from) {
    this.keyIMDb = 'a48b3198';
    this.query = query;
    this.page = page;
    this.keyYandex = 'trnsl.1.1.20200505T214053Z.061b5b0034487480.75a90f062dcdba72d8fe8cc7a53bf16a75453260';
    this.tag = '';
    this.from = from;
  }

  movie(query, page, from) {
    const url = `https://www.omdbapi.com/?s=${query}&page=${page}&type=movie&apikey=${this.keyIMDb}`;
    const loader = document.querySelector('.loader');
    const note = document.querySelector('.note');
    const noteErr = document.querySelector('.note-error');
    const swiper = document.querySelector('.swiper-wrapper');

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector('.control').classList.add('inactive');
        if (data.Response === 'True') {
          if (from === 'search') {
            loader.classList.remove('hide');
            document.querySelectorAll('.swiper-slide').forEach((el) => {
              el.remove();
            });
          }

          for (let i = 0; i < data.Search.length; i += 1) {
            this.createElement('div', `swiper-slide page${page} hide`, '', '', 'swiper-wrapper');

            document.querySelectorAll(`.page${page}`)[i].style.left = document.querySelector('.swiper-slide').style.left === '' ? 0 : document.querySelector('.swiper-slide').style.left;

            this.createElement('a', 'title', data.Search[i].Title, '', `page${page}`, i);
            this.createElement('img', 'poster', '',
              data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : '../src/img/no-poster.jpg',
              `page${page}`, i);
            this.createElement('p', 'year', data.Search[i].Year, '', `page${page}`, i);
            this.idSearch(i, this.keyIMDb, data, page);
          }
          swiper.classList.remove(swiper.classList[1]);
          swiper.classList.add(query.replace(/ /g, '-'));
          swiper.id = page;
        } else {
          throw new Error('Movie not found!');
        }

        note.innerHTML = `Showing results for: "${this.query}"`;
        noteErr.innerHTML = '';
      })
      .finally(() => {
        document.querySelector('.control').classList.remove('inactive');
        setTimeout(() => {
          loader.classList.add('hide');
          document.querySelectorAll('.swiper-slide').forEach((elem) => {
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

  idSearch(i, key, data, page) {
    const url = `https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${key}`;
    const title = document.querySelectorAll(`.page${page}>.title`);

    return fetch(url)
      .then((res) => res.json())
      .then((dataId) => {
        title[i].href = `https://www.imdb.com/title/${data.Search[i].imdbID}/videogallery/`;
        this.createElement('p', 'rating', `IMDb Rating ${dataId.imdbRating}`, '', `page${page}`, i);
      });
  }

  translate() {
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.keyYandex}&text=${this.query}&lang=en`;
    const note = document.querySelector('.note');
    const noteErr = document.querySelector('.note-error');

    if (document.querySelector('.input').value) {
      return fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.movie(data.text[0], this.page, this.from);
        })
        .catch((err) => {
          note.innerHTML = `No results for: "${this.query}"`;
          noteErr.innerHTML = err;
        });
    }
    return this.movie(this.query, this.page, this.from);
  }
}

export default GetMovie;
