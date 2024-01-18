//inicializar aplicacion
//TODO: CAMBIAR A INITaPP()
const mensajeInicial = 'Empieza a adivinar...'
const SCORE = 20
let score = 20
let highscore = 0
localStorage.setItem('highScore',0)
const numMin = 1
const numMax = 20
let secretNumber = Math.floor(Math.random() * numMax) + numMin

const guessNumberField = document.querySelector('.guess')

const messageField = document.querySelector('.message')
const secretNumberField = document.querySelector('.number')

messageField.textContent = mensajeInicial
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')

const scoreField = document.querySelector('.score')
scoreField.textContent = score

const highScoreField = document.querySelector('.highscore')
highScoreField.textContent = highscore
secretNumberField.textContent = secretNumber
//TODO:persistencia del highscore

//funcionalidad

checkButton.addEventListener('click', adivinar)

function adivinar() {
  document.body.style.backgroundColor = 'black'
  const guessNum = Number(guessNumberField.value)
  if (guessNum > secretNumber) {
    messageField.textContent = 'te has pasado'
    score--
    scoreField.textContent = score
  } else if (guessNum < secretNumber) {
    messageField.textContent = 'te quedaste corto'
    score--
    scoreField.textContent = score
  } else if (guessNum == secretNumber) {
    messageField.textContent = 'acertaste'
    score--
    checkButton.disabled = true
    if (score > highscore) {
      highscore = score
      console.log(highscore)
      localStorage.setItem('highScore',score)
      highScoreField.textContent = highscore
    }
    document.body.style.colorolor = 'green'
  }
}
function initApp() {
  highscore = Number(localStorage.getItem('highScore'))
  secretNumberField.style.backgroundColor = 'green'
  secretNumberField.style.borderRadius = '50%'
  secretNumberField.style.fontSize = '4rem'

  secretNumberField.style.color = 'white'
  messageField.textContent = mensajeInicial
  document.body.style.backgroundColor = 'black'
  
  score = SCORE
  scoreField.textContent = score
  highScoreField.textContent = highscore
  secretNumber = Math.floor(Math.random() * numMax) + numMin
  secretNumberField.textContent = secretNumber
  checkButton.disabled = false
}

againButton.addEventListener('click', again)
function again() {
  initApp()
}
