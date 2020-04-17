class ButtMenu {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
  }

  render() {
    const butt = document.createElement('div');
    butt.className = this.selector;
    butt.style.transform = 'rotate(0deg)';
    document.querySelector(`.${this.target}`).append(butt);

    for (let i = 0; i < 3; i += 1) {
      const elem = document.createElement('div');
      document.querySelector(`.${this.selector}`).append(elem);
    }
  }
}

export default ButtMenu;
