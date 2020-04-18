class CardPage {
  constructor(target, selector, array, id) {
    this.target = target;
    this.selector = selector;
    this.array = array;
    this.id = id;
  }

  renderCard() {
    document.querySelector('.name-category').innerHTML = this.array[0][this.id];
    const mode = document.querySelector('.mode').innerHTML;
    if (document.querySelector('.rating')) {
      document.querySelector('.rating').remove();
    }
    const rating = document.createElement('div');
    rating.className = 'rating';
    document.querySelector(`.${this.target}`).append(rating);

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
      img.className = mode === 'TRAIN' ? 'img-card' : 'img-card img-play';
      img.style.opacity = 1;
      document.querySelectorAll('.front-card')[i].append(img);

      const descrip = document.createElement('div');
      descrip.className = mode === 'TRAIN' ? 'descrip-card' : 'descrip-card hide';
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
      rotate.className = mode === 'TRAIN' ? 'rotate' : 'rotate hide';
      rotate.src = './src/img/rotate.png';
      document.querySelectorAll(`.${this.selector}`)[i].append(rotate);
    }
    if (mode === 'PLAY') {
      const start = document.createElement('div');
      start.className = 'start';
      start.innerHTML = 'Start Game';
      document.querySelector('.main-container').append(start);
    }
  }
}

export default CardPage;
