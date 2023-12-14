var numA = parseInt(prompt("Digite um número para A"))
var numB = parseInt(prompt("Digite um número para B"))

//Soma
Somar(numA, numB)

function Somar(numA, numB){
    return numA + numB
}
console.log(Somar(numA, numB))

Subtrair(numA, numB)

//Subtração
function Subtrair(numA, numB){
    return numA - numB
}
    console.log(Subtrair(numA, numB))

//Multiplicação
Multiplicar(numA, numB)

function Multiplicar(numA, numB){
    return numA * numB
}
    console.log(Multiplicar(numA, numB))

//Divisão
Dividir(numA, numB)

function Dividir(numA, numB){
    return numA / numB
}
    console.log(Dividir(numA, numB))


var contador = 0
var continuar = prompt("Insira 's' para continuar")

while(continuar == 's'){
    var numA = parseInt(prompt("Digite o valor de A"))
    var numB = parseInt(prompt("Digite o valor de B"))

    var opcao = parseInt(prompt("Se deseja \n1 - somar\n2 - subtrair\n3 - multiplicar\n4 - dividir"))

    var resultadoOperacao;
    switch (opcao){
        case 1:
            resultadoOperacao = Somar(numA, numB);
        break;
        case 2:
            resultadoOperacao = Subtrair(numA, numB);
        break;
        case 3:
            resultadoOperacao = Multiplicar(numA, numB)
        break;
        case 4:
            resultadoOperacao = Dividir(numA, numB)
        break;
        default:
            console.log("Operação inválida!");
        break;
    }

    resultadoOperacao[contador] = resultadoOperacao
    contador++
    console.log("O resultado da operação é: " + resultadoOperacao);

    continuar = prompt("Deseja realizar outra operação 's' ou 'n' ")
}
    var resultado = []

    exibirHistorico()
    function exibirHistorico() {
        console.log("Histórico de resultados:")
        for (var i = 0; i < resultado.length; i++){
            console.log("resultado " + i + ": " + resultado[i])
        }
    }
Somar()