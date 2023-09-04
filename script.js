const saudacao = document.querySelector('#saudacao');
const horaAtual = document.querySelector('#horario');
const secondsHtml = document.querySelector('#seconds');
const image = document.querySelector('#image');
const diaDaSemana1 = document.querySelector('#dia-da-semana');

const nD = new Date();

const diasDaSemana = ['Domingo', 'Segunda-Feira', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const horas = nD.getHours() < 10 ? '0' + nD.getHours() : nD.getHours();

const minutos = nD.getMinutes() < 10 ?
  '0' + nD.getMinutes() : nD.getMinutes();

const seconds = nD.getSeconds() < 10 ? '0' + nD.getSeconds() : nD.getSeconds();

saudacao.innerHTML = 'Bom dia!'

diaDaSemana1.innerText = diasDaSemana[nD.getDay()];

horaAtual.innerHTML = `${horas}:${minutos}`;

secondsHtml.innerHTML = `:${seconds}`;