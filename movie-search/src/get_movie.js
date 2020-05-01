class GetMovie {
  constructor(query) {
    this.key = 'a48b3198';
    this.query = query;
  }

  async movie() {
    const url = `https://www.omdbapi.com/?s=${this.query}&apikey=${this.key}`;

    const res = await fetch(url);
    const data = await res.json();

    function CreElem(tag, className, inner, src, selector, index = 0) {
      const elem = document.createElement(tag);
      elem.className = className;
      if (inner) elem.innerHTML = inner;
      if (src) elem.src = src;
      document.querySelectorAll(`.${selector}`)[index].append(elem);
    }

    async function idRating(i, key) {
      const resId = await fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${key}`);
      const dataId = await resId.json();

      CreElem('p', 'rating', `IMDB Rating ${dataId.imdbRating}`, '', 'card', i);
    }

    for (let i = 0; i < data.Search.length; i += 1) {
      CreElem('div', 'card', '', '', 'slider');
      CreElem('h3', 'title', data.Search[i].Title, '', 'card', i);
      CreElem('img', 'poster', '', data.Search[i].Poster, 'card', i);
      CreElem('p', 'year', data.Search[i].Year, '', 'card', i);

      idRating(i, this.key);
    }
  }
}

export default GetMovie;
