let nome
let salario
function PerguntarNomeSalario(){
     nome = prompt("Insira seu nome")
     salario = parseFloat(prompt("Insira seu sálario"))

    CalcularAumento(nome, salario)
}

function CalcularAumento(nome, salario){
    let aumento = 0

    if (salario <= 1500){
        aumento = 0.2
    } else if (salario > 1501 && salario <= 2000){
        aumento = 0.15
    } else if (salario > 2001 && salario <= 3000){
        aumento = 0.1
    } else {
        aumento = 0.05
    }
    let novoSalario = salario + (salario * aumento)

    console.log("Nome do colaborador: " + nome + ", salário R$: " + salario + ", teve aumento de " + (aumento * 100) 
    + "%" + ", salário reajustado para: " + novoSalario)

    perguntarNovamente()
}

function perguntarNovamente(){
    let resposta = prompt("Deseja calcular novamente? (s/n)")
    if (resposta != "n"){
        perguntarColaborador()
    } else {
        console.log("Programa encerrado")
    }
}
PerguntarNomeSalario()
