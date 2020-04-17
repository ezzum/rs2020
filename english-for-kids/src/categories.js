class Categories {
  constructor(target, selector, array) {
    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = '';
  }

  renderCat() {
    for (let i = 1; i < this.array[0].length; i += 1) {
      const element = document.createElement('div');
      element.className = this.selector;
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
