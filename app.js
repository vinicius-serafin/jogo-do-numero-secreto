let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroEscolhido){
        listaDeNumerosSorteados = []
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


/*
function calcularIMC(altura, peso){
    let IMC = peso / (alturaMetros * alturaMetros);
}

function calculaFatorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero;i++){
        fatorial *=1;
    }
    return fatorial;
}
// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}
//exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$${valorEmReais}`);

function calcularAreaPerimetroSalaRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

//Exemplo de uso
let altura = 3; //em metros
let largura = 5; //em metros
calcularAreaPerimetroSalaRetangular(altura, largura);

function calculaAreaPerimetroSalaCircular(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log (`Área da sala circular ${area.toFixed(2)} metros quadrados`);
    console.log (`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}
//Exemplo de uso
let raio = 4; //em metros
calculaAreaPerimetroSalaCircular(raio)


function mostrarTabuada(numero){
    for (let i = 1; i <=10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
        }
    }

//Exemplo de uso
let numero = 7;
mostrarTabuada(numero);
*/

/*
function multiplica(a){
    return a * a;
}

let multiplicado = multiplica(2);
console.log(`A multiplicação é: ${multiplicado}`);


function encontraMaior(a, b){
    return a > b? a : b;
}

let numeroMaior = encontraMaior(69, 44);
console.log(`O número maior é: ${numeroMaior}`);


function calculaMedia(a, b, c){
    return (a + b + c) / 3;
}

let media = calculaMedia(2,2,2);
console.log(`A média é: ${media}`);

function dobrarNumero(numero){
    return numero * 2;
}

let resultadoDobro = dobrarNumero(2);
console.log(`O resultado do dobro é ${resultadoDobro}`)


function olaNome(){
    let nome = document.querySelector('input').value;
    console.log(`Olá ${nome}!`);
}

function olaMundo(){
    console.log('Olá mundo!');
}
*/


/*
let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML ='Hora do Desafio!';

function perguntaCity(){
    let cidade = prompt('Diga o nome de uma cidade do brasil');
    alert(`Estive em ${cidade} e lembrei de você <3`)
}


function cliqueBotao(){
    console.log('O botão foi clicadoooo hahahaha!');
    alert('EU AMO JAVASCRIPOOOO YUPEE!')
}

function somador(){
    alert('Digite dois números inteiros para soma!');
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let soma = numero1 + numero2;
    alert(`A soma dos números escolhidos é ${soma}`);
}

*/