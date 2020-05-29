export default class Translate {
  constructor() {
    this.key = 'trnsl.1.1.20200505T214053Z.061b5b0034487480.75a90f062dcdba72d8fe8cc7a53bf16a75453260';
  }

  translate() {
    const arrQuery = [];
    document.querySelectorAll('.transl').forEach((el) => {
      arrQuery.push(el.innerText);
    });

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.key}&text=${arrQuery.join('@')}&lang=en-${localStorage.lang}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.querySelectorAll('.transl').forEach((el, indx) => {
          el.innerText = `${data.text[0].split('@')[indx][0].toUpperCase()}${data.text[0].split('@')[indx].slice(1)}`;
        });
      })
      .catch((err) => {
        document.querySelector('.app-error').innerHTML = `Translate: '${err}'`;
      });
  }
}
