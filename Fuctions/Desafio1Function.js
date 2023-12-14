//Função para perguntar nome e salário
var nome 
var salario 

perguntarColaborador()
function perguntarColaborador(){
    nome = prompt("Digite seu nome")
    salario = parseInt(prompt("Insira seu salário"))
    calcularAumentoSalario(nome, salario)
}

//Função para calcular o aumento de salário
calcularAumentoSalario(nome, salario)
function calcularAumentoSalario(nome, salario){
    var aumento = 0

    if (salario <= 1500){
        aumento = 0.2 // aumento de 20 %
    } else if (salario <= 2000){
        aumento = 0.15 // aumento de 15 %
    } else if (salario <= 3000){
        aumento = 0.1 // aumento de 10 %
    } else {
        aumento = 0.05 // aumento de 5 %
    } 

    var novoSalario = salario + (salario * aumento)

//Exibindo os resultados
    console.log("Nome do colaborador: " + nome )
    console.log("Salário: R$ " + salario)
    console.log("Aumento: " + (aumento * 100) + "% ")
    console.log("Salário Reajustado: R$ " + novoSalario)

    perguntarNovamente() // Perguntar se deseja calcular novamente
}

//Função para perguntar se o usuário deseja calcular novamente
perguntarNovamente()
function perguntarNovamente(){
    var resposta = prompt("Deseja calcular novamente? (s/n)")

    if (resposta == "s"){
        perguntarColaborador(); // Reiniciar o processo
    } else {
        console.log("Programa encerrado")
    }
}
perguntarColaborador()