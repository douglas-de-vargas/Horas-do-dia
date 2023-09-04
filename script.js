const saudacao = document.querySelector('#saudacao');
const horaAtual = document.querySelector('#horario');
const image = document.querySelector('#image');
const diaDaSemana1 = document.querySelector('#dia-da-semana');

const newDate = new Date()

const diaDaSemana = newDate.getDay()

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const day = diasDaSemana[diaDaSemana];
const hora = newDate.getHours();
const minutes = newDate.getMinutes();
const minutosForm = minutes < 10 ? "0" + minutes : minutes;
const seconds = newDate.getSeconds();

diaDaSemana1.innerText = day
horaAtual.innerHTML = `${hora}:${minutosForm}:${seconds}`