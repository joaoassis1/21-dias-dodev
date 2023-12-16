//Swith Case + loop + if/else
let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let peso = prompt("Informe seu peso (em KG)")
let altura = prompt("Insira sua altura (em M)")
let profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + " você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "KG")

if (idade >= 18){
    console.log("Está liberado para tomar uma geladas")
} else {
    console.log("Sem gelada para você")
}


let dias = idade * 365
let meses = idade * 12
let semana = idade * 52

console.log("Sua idade em meses: "  + meses)
console.log("Sua idade em dias: " + dias)
console.log("Sua idade em semanas: " + semana)

let imc = peso / (altura * altura)
let anoAtual = 2023
let anoNasc = anoAtual - idade

if (imc < 18.5){
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Normal")
} else if (imc >= 25 && imc <= 30){
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}
    console.log("Seu IMC é de " + imc)
    console.log("Você nasceu no ano de " + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0
for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++){
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}
    do {
        let continuar = prompt("Deseja inserir os dados novamente? (s/n)")
    } while (continuar == "s")