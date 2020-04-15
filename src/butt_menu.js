class ButtMenu {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
  }

  render() {
    const butt = document.createElement('div');
    butt.className = this.selector;
    document.querySelector(`.${this.target}`).append(butt);

    for (let i = 0; i < 3; i += 1) {
      const elem = document.createElement('div');
      document.querySelector(`.${this.selector}`).append(elem);
    }
  }

  click() {
    document.querySelector(`.${this.selector}`).addEventListener('click', () => {
      const { left } = document.querySelector('.nav_bar').style;
      const rotate = document.querySelector(`.${this.selector}`).style.transform;
      document.querySelector('.nav_bar').style.left = left === '-340px' ? '0px' : '-340px';
      document.querySelector(`.${this.selector}`).style.transform = rotate === 'rotate(360deg)' ? 'rotate(0deg)' : 'rotate(360deg)';
    });
  }
}

export default ButtMenu;
