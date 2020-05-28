export default class Storage {
  constructor() {
    this.stack = localStorage;
  }

  setStorage() {
    this.stack.setItem('lang', 'en');
    if (!this.stack.units) {
      this.stack.setItem('units', 'si');
    }
  }
}
