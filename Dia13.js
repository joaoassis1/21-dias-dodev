//Criando Classe carro
class Carro{
    nome 
    potencia
    velocidadeMaxima
    aceleracao
        constructor(nome, potencia, velocidadeMaxima, aceleracao){
            this.nome = nome
            this.potencia = potencia
            this.velocidadeMaxima = velocidadeMaxima
            this.aceleracao = aceleracao
        }

    CalcularTempo(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}

let carros = []

//Criando objetos da classe carro
let carro1 = new Carro("bmw", 350, 310, 7)
let carro2 = new Carro("mercedes", 290, 280, 8)
let carro3 = new Carro("audi", 320, 299, 6)
carros[0] = carro1
carros[1] = carro2
carros[2] = carro3

//Criando classe corrida
class Corrida{
    nome
    tipo
    distancia
    vencedor = ""
        constructor(nome, tipo, distancia){
            this.nome = nome
            this.tipo = tipo
            this.distancia = distancia
        }

    VerificarVencedor(carros){
        let menorTempo = 10000
        for (let i = 0; i < carros.length; i++){
            let tempo = carros[i].CalcularTempo(this.distancia)
            if (tempo < menorTempo){
                menorTempo = tempo
                this.vencedor = carros[i].nome
            }
        }
    }

    ExibirVencedor(carros){
        this.VerificarVencedor(carros)
        console.log("O vencedor foi: " + this.vencedor)
    }
}

//Criando objeto da classe corrida
let corrida = new Corrida("Interlagos", "StockCar", 1200)
corrida.ExibirVencedor(carros)