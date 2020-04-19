class Categories {
  constructor(target, selector, array) {
    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = '';
  }

  renderCat() {
    if (document.querySelector('.name-category')) {
      document.querySelector('.name-category').remove();
    }

    const header = document.createElement('h1');
    header.className = 'name-category';
    header.innerHTML = `${this.array[0][0]}`;
    document.querySelector('.switch').before(header);

    if (document.querySelector('.rating')) {
      document.querySelector('.rating').remove();
    }

    if (document.querySelector('.result-img')) {
      document.querySelector('.result-img').remove();
    }

    for (let i = 1; i < this.array[0].length; i += 1) {
      const element = document.createElement('div');
      element.className = document.querySelector('.mode').innerHTML === 'PLAY' ? `${this.selector} cat-play` : this.selector;
      element.id = i;
      document.querySelector(`.${this.target}`).append(element);

      const img = document.createElement('img');
      img.className = 'img-category';
      img.src = `./src/${this.array[i][1].image}`;
      img.id = i;
      document.querySelectorAll(`.${this.selector}`)[i - 1].append(img);

      const descrip = document.createElement('h2');
      descrip.innerHTML = this.array[0][i];
      descrip.id = i;
      document.querySelectorAll(`.${this.selector}`)[i - 1].append(descrip);
    }
  }
}

export default Categories;
