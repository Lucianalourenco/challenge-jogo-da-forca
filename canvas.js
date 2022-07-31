function dicaPalavra() {
    tabuleiro.font = 'bold 35px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#0A3871";
    tabuleiro.fillText("DICA : CORES.", 860,220)
}


function baseForca(){
    pincel.beginPath();
    pincel.moveTo(450,300);
    pincel.lineTo(550,300);
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 10;
    pincel.stroke();
}

function posteForca(){  
    pincel.beginPath();
    pincel.moveTo(500,50);
    pincel.lineTo(500,300);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function topoForca(){  
    pincel.beginPath(); 
    pincel.moveTo(600,50);
    pincel.lineTo(500,50);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function cordaForca(){
    pincel.beginPath();
    pincel.moveTo(600,50);
    pincel.lineTo(600,80);
    pincel.lineWidth = 10;
    pincel.stroke();
}

function desenhaBoneco(){
    if (erros == 9){
        baseForca();
    }
    if(erros == 8){
        posteForca();
    }
    if (erros == 7){
        topoForca();
    }
    if (erros == 6){
        cordaForca();
    }
    if (erros == 5){
        desenhaCabeca();
    }
    if (erros == 4){
        desenhaCorpo();
    }
    if (erros == 3){
        desenhaBracoDireito();
    }
    if (erros == 2){
        desenhaBracoEsquerdo();
    }
    if (erros == 1){
        desenhaPernaDireita();
    }    
    if (erros == 0){
        desenhaPernaEsquerda();
        mostraDerrota();
        desabilitaTeclas();
    }

function desenhaCabeca(){
    pincel.beginPath();
    pincel.lineWidth = 9;
    pincel.arc(600, 110, 30, 0, Math.PI * 2, true);
    pincel.strokeStyle = "#0A3871"
    pincel.stroke();
}

function desenhaCorpo(){
    pincel.beginPath();
    pincel.moveTo(600,140);
    pincel.lineTo(600,210);
    pincel.lineWidth = 9;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function desenhaBracoDireito(){
    pincel.beginPath();
    pincel.moveTo(600,150);
    pincel.lineTo(650,180);
    pincel.lineWidth = 9;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function desenhaBracoEsquerdo(){
    pincel.beginPath();
    pincel.moveTo(600,150);
    pincel.lineTo(552,180);
    pincel.lineWidth = 9;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function desenhaPernaDireita(){
    pincel.beginPath();
    pincel.moveTo(600,208);
    pincel.lineTo(650,250);
    pincel.lineWidth = 9;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}


function desenhaPernaEsquerda(){
    pincel.beginPath();
    pincel.moveTo(600,208);
    pincel.lineTo(552,250);
    pincel.lineWidth = 9;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

}

function mostraDerrota() {
    tabuleiro.font = 'bold 43px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "red";
    tabuleiro.fillText("Fim de jogo! A palavra é " + palavraSecreta , 630,320)
    mostrarPalavra(palavras);
}

function mostraVitoria() {
    tabuleiro.font = 'bold 43px Inter';
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "green";
    tabuleiro.fillText("Parabéns, você ganhou!", 630,320)
    setTimeout(recarregar, 2000)
}
