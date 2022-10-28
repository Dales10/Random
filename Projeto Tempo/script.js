var tmp, milisegundo = 0, loop = 0, hora = 0, minuto = 0, segundo = 0
const tempo = document.querySelector("#tempo")
const periodo = document.querySelector("#periodo")
const button = document.querySelector("#comecar")
const tic_tac = new Audio("tic-tac.mp3")
window.addEventListener("load", iniciar)

function iniciar() {
    document.querySelector("#comecar").addEventListener("click", comecar)
    document.querySelector("#restart_img").addEventListener("click", zerar)
}

function zerar() {
    tempo.innerHTML = "00:00:00"
    segundo = 0
    minuto = 0
    hora = 0
    milisegundo = 0
    loop = 0
    button.innerHTML = "começar"
    clearInterval(tmp)
}

function comecar() {
    if (loop == 1) {
        loop = 0
        button.innerHTML = "retomar"
        clearInterval(tmp)
    } else {
        loop = 1
        button.innerHTML = "pausar"
        tmp = setInterval(temporizador, 10)
    }
}

function temporizador() {
    milisegundo += 1
    if (milisegundo == 100) {
        milisegundo = 0
        inserir()
    }
}

function inserir() {
    segundo += 1
    if (segundo == 60) {
        minuto += 1
        segundo = 0
        tic_tac.play()
    }

    if (minuto == 60) {
        minuto = 0
        hora += 1
    }

    tempo.innerHTML = `${hora < 10 ? `0${hora}` : hora}:${minuto < 10  ? `0${minuto}` : minuto}:${segundo < 10 ? `0${segundo}` : segundo}`

    if (hora == 24) {
        hora = 0
    }
    //periodo.innerHTML = (hora < 12 ? "Am" : "Pm")

    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
}
