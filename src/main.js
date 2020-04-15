class Main {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
  }

  render() {
    const element = document.createElement('div');
    element.className = this.selector;
    document.querySelector(`.${this.target}`).append(element);
  }
}

export default Main;
