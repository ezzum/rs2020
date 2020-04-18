class SwitchMode {
  constructor(target) {
    this.target = target;
  }

  render() {
    const switchMode = document.createElement('div');
    switchMode.className = 'switch train';
    document.querySelector(`.${this.target}`).append(switchMode);

    const mode = document.createElement('h3');
    mode.className = 'mode';
    mode.innerHTML = 'TRAIN';
    document.querySelector('.switch').append(mode);

    const handle = document.createElement('div');
    handle.className = 'handle';
    document.querySelector('.switch').append(handle);
  }
}

export default SwitchMode;
