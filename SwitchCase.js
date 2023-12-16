//Switch case
let num1 = Number(prompt("Insira o primeiro número"))
let num2 = Number(prompt("Insira o segundo número"))
let opcao = prompt("Escolha uma opção: \n 1 - soma \n2 - multiplicar \n3 - subtrair \n4 - dividir")
let resultado = 0

switch (opcao) {
    case "1":
       resultado = num1 + num2
       console.log(resultado) 
       break;
    case "2":
        resultado = num1 * num2
        console.log(resultado)
        break;
    case "3":
        resultado = num1 - num2
        console.log(resultado)
        break;
    case "4":
        resultado = num1 / num2
        console.log(resultado)
        break;
    default:
        console.log("opção inválida")
        break;
}

//Switch case
let abastecimento = prompt("Escolha uma opção: \n1 - gasolina \n2 - álcool \n3 - calibrar pneus")
let gasolina = 5
let alcool = 3

switch (abastecimento){
    case "1":
        abastecimento = parseInt(prompt("Quantos litros deseja?"))
        console.log("Você abasteceu ", abastecimento, "litros e pagou R$", (gasolina * abastecimento))
        break;
    case "2":
        abastecimento = parseInt(prompt("Quantos litros deseja?"))
        console.log("Você abasteceu ", abastecimento, "litros e pagou R$", (alcool * abastecimento))
        break;
    case "3":
        console.log("pneus calibrados com sucesso")
        break;
    default:
        console.log("opção inválida")
        break;
}