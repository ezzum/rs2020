class CardPage {
  constructor(target, selector, array, id) {
    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = id;
  }

  renderCard() {
    for (let i = 0; i < this.array[this.id].length; i += 1) {
      const elem = document.createElement('div');
      elem.className = `${this.selector} card`;
      elem.id = i;
      document.querySelector(`.${this.target}`).append(elem);

      const front = document.createElement('div');
      front.className = 'front-card';
      front.id = i;
      document.querySelectorAll(`.${this.selector}`)[i].append(front);

      const img = document.createElement('img');
      img.src = `./src/${this.array[this.id][i].image}`;
      img.className = 'img-card';
      document.querySelectorAll('.front-card')[i].append(img);

      const descrip = document.createElement('div');
      descrip.className = 'descrip-card';
      descrip.innerHTML = `${this.array[this.id][i].word}`;
      document.querySelectorAll('.front-card')[i].append(descrip);

      const back = document.createElement('div');
      back.className = 'back-card';
      back.id = i;
      document.querySelectorAll(`.${this.selector}`)[i].append(back);

      const imgBack = document.createElement('img');
      imgBack.src = `./src/${this.array[this.id][i].image}`;
      imgBack.className = 'img-card';
      document.querySelectorAll('.back-card')[i].append(imgBack);

      const descripBack = document.createElement('div');
      descripBack.className = 'descrip-card';
      descripBack.innerHTML = `${this.array[this.id][i].translation}`;
      document.querySelectorAll('.back-card')[i].append(descripBack);

      const rotate = document.createElement('img');
      rotate.className = 'rotate-card';
      rotate.src = './src/img/rotate.png';
      document.querySelectorAll(`.${this.selector}`)[i].append(rotate);
    }
  }
}

export default CardPage;
