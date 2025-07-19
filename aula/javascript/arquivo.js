
/*let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
alert ( "Resultado da Soma: " + (numero1 + numero2) );

var global = "Variavel Global";
console.log(global);
*/


function saudacao() {

    alert("SIM! SOU o bem-vindo 3! seja bem vindo ao nosso site 3");

}

function calcular() {

    alert("Olá Thiago, hora de calcular!");

    let variavel1 = Number(prompt("Digite um número: "));
    let variavel2 = Number(prompt("Digite outro número: "));
    let resultado = variavel1 + variavel2;

    alert("Seu resultado: " + resultado);

}

function exemplo2() {

    var local = "Variavel Local"
    console.log(local);

}

exemplo2();

// console.log(local);

let x = 10;
if ( x > 5 ) {

    let y = 20;
    console.log("valor de y: ", y);

}

console.log(x);
// console.log(y);

const _constante = "texto";

console.log(_constante);

// Teste 1 - Condição em Váriavel

let valorBoolean = false;

let considerarValorBooolean = valorBoolean ? "Sim!" : "Não.";
console.log("1) A resposta é " + considerarValorBooolean);

// Teste 2 - Condição em Váriavel

let numeroA = 10;
let numeroB = 8;

let numeroABMaior = numeroA > numeroB ? "é " + numeroA : "não é " + numeroA;
console.log("2) maior número " + numeroABMaior);

// Teste 3 - Condição em Váriavel

let numeroC = 10;
let numeroD = 10;

let numeroCDMaior = numeroC > numeroD ? numeroC + " é o maior número!" : numeroC < numeroD ? numeroD + " é o maior número!" : "Os números são Iguais! (" + numeroD + ")" ;
console.log("3) " + numeroCDMaior);