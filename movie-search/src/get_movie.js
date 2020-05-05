class GetMovie {
  constructor(query) {
    this.key = 'a48b3198';
    this.query = query;
  }

  movie() {
    const url = `https://www.omdbapi.com/?s=${this.query}&apikey=${this.key}`;
    const loader = document.querySelector('.loader');
    const note = document.querySelector('.note');

    function CreateElement(tag, className, inner, src, selector, index = 0) {
      const elem = document.createElement(tag);
      elem.className = className;
      if (inner) elem.innerHTML = inner;
      if (src) elem.src = src;
      document.querySelectorAll(`.${selector}`)[index].append(elem);
    }

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        function idRating(i, key) {
          return fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${key}`)
            .then((res) => res.json())
            .then((dataId) => {
              CreateElement('p', 'rating', `IMDb Rating ${dataId.imdbRating}`, '', 'card', i);
            });
        }

        if (data.Response === 'True') {
          loader.classList.remove('hide');
          document.querySelectorAll('.card').forEach((el) => {
            el.remove();
          });
        }

        for (let i = 0; i < data.Search.length; i += 1) {
          CreateElement('div', 'card hide', '', '', 'slider');
          CreateElement('h3', 'title', data.Search[i].Title, '', 'card', i);
          CreateElement('img', 'poster', '',
            data.Search[i].Poster !== 'N/A' ? data.Search[i].Poster : '../src/img/no-poster.jpg',
            'card', i);
          CreateElement('p', 'year', data.Search[i].Year, '', 'card', i);
          idRating(i, this.key);
        }

        note.innerHTML = `Results for: "${this.query}"`;
      })
      .finally(() => {
        setTimeout(() => {
          loader.classList.add('hide');
          document.querySelectorAll('.card').forEach((elem) => {
            elem.classList.remove('hide');
          });
        }, 1000);
      })
      .catch(() => {
        note.innerHTML = `No results for: "${this.query}"`;
      });
  }
}

export default GetMovie;
