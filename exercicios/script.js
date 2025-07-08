
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

    let texto1 = Text (document.getElementById("texto1").value);
    let numeroCaracteres = Number (texto1.length);

    document.getElementById("resultado3").innerText = "Número caracteres: " + (numeroCaracteres);

}