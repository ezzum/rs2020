class Categories {
  constructor(target, selector, array) {
    this.target = target;
    this.selector = selector;
    this.array = array;
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

  click() {
    document.querySelector(`.${this.target}`).addEventListener('click', (event) => {
      const id = parseInt(event.target.id, 10);
      if (event.target.className === 'rotate') {
        this.rotate(event);
        return;
      }

      if (event.target.className === this.target) {
        return;
      }

      if (event.target.className === this.selector) {
        document.querySelectorAll(`.${this.selector}`).forEach((el) => {
          el.remove();
        });

        this.renderCard(id);
      }
    });
  }

  renderCard(id) {
    for (let i = 0; i < this.array[id].length; i += 1) {
      const elem = document.createElement('div');
      elem.className = `${this.selector} card`;
      elem.id = i;
      document.querySelector(`.${this.target}`).append(elem);

      const front = document.createElement('div');
      front.className = 'front';
      document.querySelectorAll(`.${this.selector}`)[i].append(front);

      const img = document.createElement('img');
      img.src = `./src/${this.array[id][i].image}`;
      img.className = 'img-card';
      document.querySelectorAll('.front')[i].append(img);

      const descrip = document.createElement('div');
      descrip.className = 'descrip';
      descrip.innerHTML = `${this.array[id][i].word}`;
      document.querySelectorAll('.front')[i].append(descrip);

      const back = document.createElement('div');
      back.className = 'back';
      document.querySelectorAll(`.${this.selector}`)[i].append(back);

      const imgBack = document.createElement('img');
      imgBack.src = `./src/${this.array[id][i].image}`;
      imgBack.className = 'img-card';
      document.querySelectorAll('.back')[i].append(imgBack);

      const descripBack = document.createElement('div');
      descripBack.className = 'descrip';
      descripBack.innerHTML = `${this.array[id][i].translation}`;
      document.querySelectorAll('.back')[i].append(descripBack);

      const rotate = document.createElement('img');
      rotate.className = 'rotate';
      rotate.src = './src/img/rotate.png';
      document.querySelectorAll(`.${this.selector}`)[i].append(rotate);
    }
  }

  rotate(event) {
    document.querySelectorAll(`.${this.selector}`)[event.target.parentElement.id].style.transform = 'rotateY(180deg)';
    document.querySelectorAll(`.${this.selector}`)[event.target.parentElement.id].addEventListener('mouseleave', () => {
      document.querySelectorAll(`.${this.selector}`)[event.target.parentElement.id].style.transform = 'rotateY(0deg)';
    });
  }
}

export default Categories;
