

//inicializar aplicacion
const mensajeInicial = 'Empieza a adivinar'

let score = 20
let highscore = 0
let secretNumber = Math.floor(Math.random() * 20) + 1

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

//funcionalidad

checkButton.addEventListener('click', () => {

    const guessNum = Number(guessNumberField.value)
    if (guessNum > secretNumber) {
        messageField.textContent = 'te has pasado'
        score--
    }else if (guessNum < secretNumber) {
        messageField.textContent = 'te quedaste corto'
        score--

    }
    if (guessNum == secretNumber) {
        messageField.textContent = 'acertaste'
        score--

    }
})

