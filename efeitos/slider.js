var margin, anterior, count = 1, slideAtual = 0, slideAnterior = 1, posicaoAnterior = 1, tempo = 1000, segundo = 0;
window.addEventListener("load", load);

function load() {
    document.querySelector("#slide1").addEventListener("click", () => trocar(1, true));
    document.querySelector("#slide2").addEventListener("click", () => trocar(2, true));
    document.querySelector("#slide3").addEventListener("click", () => trocar(3, true));
    document.querySelector("#slide4").addEventListener("click", () => trocar(4, true));
    document.querySelector("#slide5").addEventListener("click", () => trocar(5, true));
    document.querySelector("#slide1").style.backgroundColor = "#fff";
};

function trocar(posicao, trocaManual) {
    if (trocaManual === true) {
        count = posicao;
        segundo = 0
    };
    if (posicao === 1) {
        margin = 0;
    } else if (posicao === 2) {
        margin = -300;
    } else if (posicao === 3) {
        margin = -600;
    } else if (posicao === 4){
        margin = -900;
    } else {
        margin = -1200
    };
    trocarCor(posicao);
    document.querySelector(".first").style.marginLeft = `${margin}px`;
    slideAnterior = posicao
};

function trocarCor(posicao) {
    document.querySelector("#slide" + posicao).style.backgroundColor = "#fff";
    document.querySelector("#slide" + posicaoAnterior).style.backgroundColor = "transparent";
    posicaoAnterior = posicao;
};

function cronometro() {
    count++;
    if (count === 6) {
        count = 1;
    };
    trocar(count, false);
}

setInterval(() => {
    segundo += 1
    if (segundo === 3) {
        cronometro()
        segundo = 0
    }
}, tempo);