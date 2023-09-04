const body = document.querySelector('.body');
const saudacao = document.querySelector('#saudacao');
const horaAtual = document.querySelector('#horario');
const secondsHtml = document.querySelector('#seconds');
const image = document.querySelector('#image');
const diaDaSemana1 = document.querySelector('#dia-da-semana');

const nD = new Date();

const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const hours = nD.getHours() < 10 ? '0' + nD.getHours() : nD.getHours();

const minutes = nD.getMinutes() < 10 ?
  '0' + nD.getMinutes() : nD.getMinutes();

const seconds = nD.getSeconds() < 10 ? '0' + nD.getSeconds() : nD.getSeconds();

if (hours >= 6 && hours <= 11) {
  saudacao.innerHTML = 'Bom Dia!';
  body.classList.add('dia');
} else if (hours >= 12 && hours <= 17) {
  saudacao.innerHTML = 'Boa Tarde!';
  body.classList.add('tarde');
} else if (hours >= 18) {
  saudacao.innerHTML = 'Boa Noite!';
  body.classList.add('noite');
} else {
  saudacao.innerHTML = 'Boa Madrugada!'
  body.classList.add('madrugada');
};

diaDaSemana1.innerHTML = diasDaSemana[nD.getDay()];

horaAtual.innerHTML = `${hours}:${minutes}`;

secondsHtml.innerHTML = `:${seconds}`;