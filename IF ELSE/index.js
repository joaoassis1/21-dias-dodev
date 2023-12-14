var nome 
var idade
var AnoNasc
var ParImparIdade
var ParImparAno

nome = prompt('Insira seu nome')
idade = prompt('Insira sua idade')
AnoNasc = 2022 - idade

if(idade % 2 == 0)
{
    ParImparIdade = 'par'
}
else(AnoNasc % 2 == 0)
{
    ParImparAno = 'par'
}

if(idade >= 18)
{    
    console.log('Está liberado o consumo de bebidas alcoólicas')
}
else{
    console.log('Você não deve beber')
}

console.log('Olá '+nome+', você tem '+idade+'anos que é um número '+ParImparIdade+' e nasceu no ano: '+AnoNasc+' que é um número '+ParImparAno+'.')
    