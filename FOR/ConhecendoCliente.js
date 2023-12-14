var nome = prompt("Informe seu nome")
var idade = prompt("Informe sua idade")
var salarioAtual = parseInt(prompt("Informe seu salário atual"))
var aumento = 0.015 //aumento de 1.5% no primeiro ano

console.log("\nPrevisão salarial para os próximos 10 anos:")

for (var ano = 1; ano < 10; ano++){
   salarioAtual += salarioAtual * aumento
   aumento *= 2 //aumento dobra a cada ano

   var salario = salarioAtual
   var anoCorrespondente = 2023 + ano
   console.log(anoCorrespondente, " -  R$ " ,salario)
}