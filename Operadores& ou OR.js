var fome = prompt("Você está com fome? \n1 - Sim\n2 - Não.")
var dinheiro = prompt("Você tem dinheiro para comer? \n1 - Sim\n2 - Não.")

if(fome == 1 && dinheiro == 1){
    console.log("Vai ao McDonalds")
} else if (fome == 2 || dinheiro == 2){
    console.log("É melhor você comer em casa")
}
    
var cintoSeguranca = prompt("Você está usando cinto de segurança? \nS - Sim\nN - Não");
var nivelAlcool = prompt("Você está bebâdo? \nA - Sim\nAA - Não");
var semaforoVerde = prompt("O semaforo está verde? \nV - Está verde\nQ - Não está verde");

if (cintoSeguranca == 'S' && nivelAlcool == 'AA' && semaforoVerde == 'V'){
    console.log("Você pode prosseguir")
} else {
    console.log("Você não deve prossiguir")
}