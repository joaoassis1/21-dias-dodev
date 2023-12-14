//Cadastrando variaveis
var nome = prompt("Digite seu nome")
var idade = prompt("Digite sua idade")
var peso = prompt("Digite seu peso")
var altura = prompt("Digite sua altura em metros")
var profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + " você tem " + idade + " anos, é " + profissao + ", tem " + altura + " de altura e pesa " + peso + " kg ")

//Verificando a idade
if (idade >= 18){
    console.log("Está liberado para tomar umas geladas")
} else {
    console.log("Sem geladas para você")
}

//Calculando a idade em meses, semanas e dias
var meses = idade * 12
var semanas = idade * 52
var dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)

//Calculando IMC
var IMC = peso / (altura * altura)

if (IMC < 18.5){
    console.log("Você está na magreza")
} else if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Você está no peso normal")
} else if (IMC >= 25 && IMC <= 30){
    console.log("Você está com sobrepeso")
} else {
    console.log("Você está com obesidade")
}

//Ano de nascimento
var anoNasc = 2023 - idade

console.log("Você nasceu em: " + anoNasc)

//Idade desde o nascimento
var anoAtual = 2023
var idadeAtual = 0

for (var i = anoNasc; i <= anoAtual; i++){
    console.log(i + " - " + idadeAtual + " anos de idade ")
    idadeAtual++
}