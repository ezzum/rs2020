export default class Check {
  constructor() {
    this.token = localStorage.token;
  }

  checkSignIn() {
    if (this.token) {
      document.querySelector('.log-reg').classList.remove('visible');
      document.querySelector('.start-screen').classList.add('visible');
    }
  }
}
