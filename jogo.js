// seletores e variáveis 
var palavras = ['RUBRO','MARROM','CORAL', 'BEGE', 'MALVA', 'OLIVA', 'PRATA', 'VIOLETA', 'DOURADO'];
var palavrasNovas = [];
var tabuleiro = document.getElementById('forca').getContext('2d');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

let divAdicionaPalavra  = document.getElementById("adicionar-palavra");
let btnSalvar = document.getElementById("btn-salvar");
let letras = [];
let palavraCorreta = " ";
let letrasIncorretas = [];
let acertos = 0;
let erros = 9;
let letraEscolhida = [];


function desenhaTracos() {
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCop = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.beginPath();
    var eixo = 400/palavraSecreta.length;
    for (let i = 0; i < palavraSecreta.length; i++) {
        tabuleiro.moveTo(500+(eixo*i), 420);
        tabuleiro.lineTo(550+(eixo*i), 420);
        
        
    }
    tabuleiro.stroke();
    tabuleiro.closePath();
    }baseForca();
    dicaPalavra();
    desenhaTracos(escolherPalavraSecreta())

function escreverLetraCorreta(index) {
    tabuleiro.font ="bold 52px Inter";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineCop = "round";
    tabuleiro.strokeStyle = "#0A3871"

    var eixo = 400/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 505+(eixo*index), 405);
    tabuleiro.stroke()
    
}

function escreverLetraIncorreta(letras, errosLeft) {
    tabuleiro.font ="bold 35px Inter";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineJoin = "round";
    tabuleiro.lineCop = "round";
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.fillText(letras, 435+(35*(11-errosLeft)),480,35)  
}



function escolherPalavraSecreta( ){
    var palavra = palavras[Math.floor(Math.random( )*palavras.length)]
    palavraSecreta = palavra;
    console.log(palavra);
    return palavra
}

function verificarLetraCorreta(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
        console.log(key)
        letras.push(key)
        return false
    }
    else{
        letras.push(key.toUpperCase())
        return true
    }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase()
    
}

function adicionarLetraIncorreta(letter) {
    if (palavraSecreta.indexOf(letter) <= 0) {
        erros-=1;
        desenhaBoneco();   
     }
}


document.onkeydown= (e) => {
    var letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)) {
        if(palavraSecreta.includes(letra)) {
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for (let i= 0; i < palavraSecreta.length; i++) {
                if(palavraSecreta[i] === letra){
                    escreverLetraCorreta(i);
                    verificarVencedor(letra);
                }
            }
                
        }

    else{
        if(!verificarLetraCorreta(e.key))
        return
        adicionarLetraIncorreta(letra);
        escreverLetraIncorreta(letra,erros);
        }
    }
}

function verificarVencedor(letra) {
    letraEscolhida.push( letra.toUpperCase());
    if (letraEscolhida.length == palavraSecreta.length){

        mostraVitoria();
    }
}

function recarregar(){
    location.reload();
}


