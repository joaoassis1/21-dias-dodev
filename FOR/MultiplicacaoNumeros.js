for (let i = 1; i <= 5; i++){
    let numero = parseInt(prompt("Digite um número: " + i))
    console.log("Número " + numero)

    for (let i2 = 1; i2 <= 5; i2++){
        let resultado = numero * (i2 + i + 3 )
        console.log(numero + " x " + i2 + i + 3 + " = " + resultado)
    }
}