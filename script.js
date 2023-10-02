const body = document.querySelector('.body')
const main = document.querySelector('.main')
const saudacao = document.querySelector('#saudacao')
const saudacaoIcon = document.querySelector('.bi')
const diaMes = document.querySelector('#dia-mes')
const horaAtual = document.querySelector('#horario')
const secondsHtml = document.querySelector('#seconds')
const imageDay = document.querySelector('#image')
const sectionImage = document.querySelector('#section-image')

function attDate() {
  const nd = new Date()
  const diaAtual = nd.getDate().toString().padStart(2, '0')
  const horas = nd.getHours().toString().padStart(2, '0')
  const minutos = nd.getMinutes().toString().padStart(2, '0')
  const segundos = nd.getSeconds().toString().padStart(2, '0')
  const diasDaSemana = [
    'Dom.',
    'Seg.',
    'Ter.',
    'Quar.',
    'Quin.',
    'Sex.',
    'Sáb.'
  ]

  const mesesDoAno = [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.'
  ]

  let periodo = ''
  let iconId = ''
  let corVariavel = ''
  let imageSrc = ''

  if (horas >= 6 && horas <= 11) {
    periodo = 'manha'
    iconId = 'bi-sun'
    corVariavel = '--corManha'
    imageSrc = 'assets/manha.jpg'
  } else if (horas >= 12 && horas <= 17) {
    periodo = 'tarde'
    iconId = 'bi-sun'
    corVariavel = '--corTarde'
    imageSrc = 'assets/tarde.jpg'
  } else if (horas >= 18 && horas <= 23) {
    periodo = 'noite'
    iconId = 'bi-moon-stars'
    corVariavel = '--corNoite'
    imageSrc = 'assets/noite.jpg'
  } else if (horas >= 0 && horas <= 5) {
    periodo = 'madrugada'
    iconId = 'bi-moon-stars'
    corVariavel = '--corMadrugada'
    imageSrc = 'assets/noite.jpg'
  }

  main.classList.add(periodo)

  if (periodo === 'manha') {
    saudacao.innerHTML = `Bom Dia!`
  } else if (periodo === 'madrugada') {
    saudacao.innerHTML = `Madrugada`
  } else {
    saudacao.innerHTML = `Boa ${
      periodo.charAt(0).toUpperCase() + periodo.slice(1)
    }!`
  }

  saudacaoIcon.classList.add(iconId)

  diaMes.innerHTML = `${diasDaSemana[nd.getDay()]} ${diaAtual} de ${
    mesesDoAno[nd.getMonth()]
  } de ${nd.getFullYear()}`

  horaAtual.innerHTML = `${horas}:${minutos}`

  secondsHtml.innerHTML = `:${segundos}`

  imageDay.src = imageSrc
  imageDay.alt = `Imagem da ${periodo}.`

  setTimeout(() => {
    main.classList.remove('load')
  }, 2000)
}

setInterval(attDate, 500)
