const main = document.querySelector('.main')
const body = document.querySelector('.body');
const saudacao = document.querySelector('#saudacao');
const horaAtual = document.querySelector('#horario');
const secondsHtml = document.querySelector('#seconds');
const image = document.querySelector('#image');
const diaDaSemana1 = document.querySelector('#dia-da-semana');
const imageDay = document.querySelector('#image');

function attDate() {
  const nD = new Date();

  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  const hours = nD.getHours() < 10 ? '0' + nD.getHours() : nD.getHours();

  const minutes = nD.getMinutes() < 10 ?
    '0' + nD.getMinutes() : nD.getMinutes();

  const seconds = nD.getSeconds() < 10 ? '0' + nD.getSeconds() : nD.getSeconds();

  if (hours >= 6 && hours <= 11) {
    saudacao.innerHTML = `Bom Dia! <i class="bi bi-sun"></i>`;
    body.classList.add('dia');
    imageDay.src ="/manha.jpg";
  } else if (hours >= 12 && hours <= 17) {
    saudacao.innerHTML = `Boa Tarde! <i class="bi bi-brightness-high"></i>`;
    body.classList.add('tarde');
    imageDay.src ="/tarde.jpg";
  } else if (hours >= 18) {
    saudacao.innerHTML = `Boa Noite! <i class="bi bi-moon-stars"></i>`;
    body.classList.add('noite');
    imageDay.src ="/noite.jpg";
  } else {
    saudacao.innerHTML = `Boa Madrugada! <i class="bi bi-moon-stars"></i>`
    body.classList.add('madrugada');
    imageDay.src ="/noite.jpg";
  };

  diaDaSemana1.innerHTML = diasDaSemana[nD.getDay()];

  horaAtual.innerHTML = `${hours}:${minutes}`;

  secondsHtml.innerHTML = `:${seconds}`;

  setTimeout(() => {
    main.classList.remove('load')
  }, 500);
}

setInterval(attDate, 1000);