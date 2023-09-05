const body = document.querySelector('.body');
const main = document.querySelector('.main');
const saudacao = document.querySelector('#saudacao');
const diaDaSemana1 = document.querySelector('#dia-da-semana');
const horaAtual = document.querySelector('#horario');
const secondsHtml = document.querySelector('#seconds');
const imageDay = document.querySelector('#image');

function attDate() {
  const nd = new Date();
  const horas = nd.getHours();
  const minutos = nd.getMinutes();
  const segundos = nd.getSeconds();
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  let periodo = '';
  iconId = '';
  let corVariavel = '';
  let imageSrc = '';

  if (horas >= 6 && horas <= 11) {
    periodo = 'manha';
    iconId = 'sun';
    corVariavel = '--corManha';
    imageSrc = '/mamha.jpg';
  } else if (horas >= 12 && horas <= 17) {
    periodo = 'tarde';
    iconId = 'sun';
    corVariavel = '--corTarde';
    imageSrc = '/tarde.jpg';
  } else if (horas >= 18) {
    periodo = 'noite';
    iconId = 'moon-stars';
    corVariavel = '--corNoite';
    imageSrc = '/noite.jpg';
  } else {
    periodo = 'madrugada';
    iconId = 'moon-stars';
    corVariavel = '--corMadrugada';
    imageSrc = '/noite.jpg';
  };

  body.classList.add(periodo);
  imageDay.style.borderColor = 'var(' + corVariavel + ')';

  saudacao.innerHTML = `Boa ${periodo.charAt(0).toUpperCase() + periodo.slice(1)}! <i class='bi bi-${iconId}'></i>`;

  diaDaSemana1.innerHTML = diasDaSemana[nd.getDay()];

  horaAtual.innerHTML = `
  ${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos}`;

  secondsHtml.innerHTML = `:${segundos < 10 ? '0' : ''}${segundos}`;

  setTimeout(() => {
    main.classList.remove('load')
  }, 500);
}

setInterval(attDate, 1000);