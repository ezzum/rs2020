export default class Query {
  constructor(user) {
    this.user = user;
  }

  signUp() {
    const signUp = document.querySelector('.sign-up');
    const url = 'https://afternoon-falls-25894.herokuapp.com/users';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('id', data.id);
        this.signIn();
      })
      .catch(() => {
        signUp.classList.remove('loader');
        console.log('Failed to sign up');
      });
  }

  signIn() {
    const signUp = document.querySelector('.sign-up');
    const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.user),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('token', data.token);
        document.querySelector('.log-reg').classList.remove('visible');
        document.querySelector('.start-screen').classList.add('visible');
      })
      .finally(() => {
        signUp.classList.remove('loader');
      })
      .catch(() => {
        console.log('Failed to sign in');
      });
  }
}
