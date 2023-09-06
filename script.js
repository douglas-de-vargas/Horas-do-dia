const body = document.querySelector('.body');
const main = document.querySelector('.main');
const saudacao = document.querySelector('#saudacao');
const saudacaoIcon = document.querySelector('.bi');
const diaDaSemana1 = document.querySelector('#dia-da-semana');
const horaAtual = document.querySelector('#horario');
const secondsHtml = document.querySelector('#seconds');
const imageDay = document.querySelector('#image');

function attDate() {
  const nd = new Date();
  const horas = nd.getHours().toString().padStart(2, '0');
  const minutos = nd.getMinutes().toString().padStart(2, '0');
  const segundos = nd.getSeconds().toString().padStart(2, '0');
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  let periodo = '';
  let iconId = '';
  let corVariavel = '';
  let imageSrc = '';

  if (horas >= 6 && horas <= 11) {
    periodo = 'manha';
    iconId = 'bi-sun';
    corVariavel = '--corManha';
    imageSrc = '/manha.jpg';
  }
  else if (horas >= 12 && horas <= 17) {
    periodo = 'tarde';
    iconId = 'bi-sun';
    corVariavel = '--corTarde';
    imageSrc = '/tarde.jpg';
  }
  else if (horas >= 18 && horas <= 23) {
    periodo = 'noite';
    iconId = 'bi-moon-stars';
    corVariavel = '--corNoite';
    imageSrc = '/noite.jpg';
  }
  else if (horas >= 0 && horas <= 5) {
    periodo = 'madrugada';
    iconId = 'bi-moon-stars';
    corVariavel = '--corMadrugada';
    imageSrc = '/noite.jpg';
  }

  body.classList.add(periodo);

  imageDay.style.borderColor = 'var(' + corVariavel + ')';

  saudacaoIcon.style.textShadow = '1px 1px 1px var(' + corVariavel + ')';

  if (periodo === 'manha') {
    saudacao.innerHTML = `Bom Dia!`;
  } else {
    saudacao.innerHTML = `Boa ${periodo.charAt(0).toUpperCase() + periodo.slice(1)}!`;
  }

  saudacaoIcon.classList.add(iconId);

  diaDaSemana1.innerHTML = diasDaSemana[nd.getDay()];

  horaAtual.innerHTML = `${horas}:${minutos}`

  secondsHtml.innerHTML = `:${segundos}`;
  
  imageDay.src = imageSrc;
  imageDay.alt = `Imagem da ${periodo}.`;

  setTimeout(() => {
    main.classList.remove('load')
  }, 500);
}

setInterval(attDate, 1000);