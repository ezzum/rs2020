class AppContainer {
  constructor(target, selector) {
    this.target = target;
    this.selector = selector;
    this.head = null;
    this.main = null;
  }

  render() {
    const container = document.createElement('div');
    container.className = this.selector;
    document.querySelector(this.target).append(container);

    this.head = document.createElement('div');
    this.head.className = `header-${this.selector}`;
    document.querySelector(`.${this.selector}`).append(this.head);

    this.main = document.createElement('div');
    this.main.className = `main-${this.selector}`;
    document.querySelector(`.${this.selector}`).append(this.main);
  }
}

export default AppContainer;
