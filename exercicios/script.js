
//EX 1 - SOMA SIMPLES 



function somar() {

    let numero1 = Number (document.getElementById("numero1").value);
    console.log(numero1);

    let numero2 = Number (document.getElementById("numero2").value);
    console.log(numero2);

    document.getElementById("resultado1").innerText = "Resultado: " + (numero1 + numero2);

}

//EX 2 - VERIFICAR IDADE

function verificarIdade() {

    let idade = Number (document.getElementById("idade").value);

    if (idade >= 18) {

        document.getElementById("resultado2").innerText = "Maior de Idade";

    }
    else {

        document.getElementById("resultado2").innerText = "Menor de Idade";

    }

}

//EX 3 - CONTAR CARACTERES

function contarCaracteres() {

    let texto = String (document.getElementById("texto1").value);
    let numeroCaracteres = texto.length;

    document.getElementById("resultado3").innerText = "Número caracteres: " + numeroCaracteres;

}

//EX 4 - VERIFICAR PAR IMPAR

function verificarImpar() {

    let numero = Number (document.getElementById("numero3").value);

    if ( numero == 0 ) {

        document.getElementById("resultado4").innerText = "Número é zero.";

    } 
    else if ( numero % 2 == 0 ) {
        
        document.getElementById("resultado4").innerText = "Número é par.";

    } 
    else {

        document.getElementById("resultado4").innerText = "Número é impar.";

    }

}

//Ex 5 - CAIXA ALTA!

function transformarTextoCaixaAlta() {

    let texto = String (document.getElementById("texto2").value);
    let textoCaixaAlta = texto.toUpperCase();

    document.getElementById("resultado5").innerText = "Seu texto em caixa-alta: " + textoCaixaAlta;

}

//EX 6 - MAIOR

function verificarMaior() {

    let numero1 = Number (document.getElementById("numero4").value);

    let numero2 = Number (document.getElementById("numero5").value);

    if ( numero1 > numero2 ) {
        
        document.getElementById("resultado6").innerText = numero1 + " é maior que " + numero2;

    } 
    else if ( numero1 < numero2 ) {

        document.getElementById("resultado6").innerText = numero1 + " é menor que " + numero2;

    }
    else {

        document.getElementById("resultado6").innerText = numero1 + " é igual á " + numero1;

    }

}

//EX 7 - TABUADA

function calcularTabuada() {

    let numero = Number (document.getElementById("numero6").value);

    document.getElementById("resultado7").innerText = 
    numero + " * 1 = " + numero * 1 + "\n" +
    numero + " * 2 = " + numero * 2 + "\n" +
    numero + " * 3 = " + numero * 3 + "\n" +
    numero + " * 4 = " + numero * 4 + "\n" +
    numero + " * 5 = " + numero * 5 + "\n" +
    numero + " * 6 = " + numero * 6 + "\n" +
    numero + " * 7 = " + numero * 7 + "\n" +
    numero + " * 8 = " + numero * 8 + "\n" +
    numero + " * 9 = " + numero * 9 + "\n" +
    numero + " * 10 = " + numero * 10;

}s