class GetMovie {
  constructor(query) {
    this.key = 'a48b3198';
    this.query = query;
  }

  async movie() {
    const url = `https://www.omdbapi.com/?s=${this.query}&apikey=${this.key}`;

    const res = await fetch(url);
    const data = await res.json();

    async function idRating(i, key) {
      const resId = await fetch(`https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=${key}`);
      const dataId = await resId.json();

      const rating = document.createElement('p');
      rating.className = 'rating';
      rating.innerHTML = `IMDB Rating ${dataId.imdbRating}`;
      document.querySelectorAll('.card')[i].append(rating);

      return dataId;
    }

    for (let i = 0; i < data.Search.length; i += 1) {
      const card = document.createElement('div');
      card.className = 'card';
      document.querySelector('.slider').append(card);

      const title = document.createElement('h3');
      title.className = 'title';
      title.innerHTML = data.Search[i].Title;
      document.querySelectorAll('.card')[i].append(title);

      const img = document.createElement('img');
      img.src = data.Search[i].Poster;
      img.className = 'poster';
      document.querySelectorAll('.card')[i].append(img);

      const year = document.createElement('p');
      year.className = 'year';
      year.innerHTML = data.Search[i].Year;
      document.querySelectorAll('.card')[i].append(year);

      idRating(i, this.key);
    }
    console.log(data.Search);
  }
}

export default GetMovie;
