class Menu {
  constructor(array, target, selector) {
    this.target = target;
    this.array = array;
    this.selector = selector;
  }

  render() {
    const menu = document.createElement('ul');
    menu.className = this.selector;
    menu.style.left = '-340px';
    document.querySelector(`.${this.target}`).append(menu);

    for (let i = 0; i < this.array.length; i += 1) {
      const list = document.createElement('a');
      list.className = i === 0 ? `${menu.className}-item active` : `${menu.className}-item`;
      list.innerHTML = this.array[0][i];
      list.href = '#';
      list.id = i;
      document.querySelector(`.${menu.className}`).append(list);
    }
  }
}

export default Menu;
