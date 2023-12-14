var nomes = []
var senhas = []


function perguntarUsuario(){
    var opcao = prompt("Escolha uma opção: \n1 - Cadastrar \n2 - Fazer login \n3 - Excluir um cadastro \n4 - Encerrar o programa")
    return opcao
}

function fazerCadastro(){
    nomes.push(prompt("Digite seu nome:"))
    senhas.push(prompt("Digite sua senha:"))
}

function fazerLogin(nome, senha){
    var indice = nomes.indexOf(nome)

        if (indice !== -1 && senhas[indice] == senha){
                return true
            } else {
                return false
            }
        }
    

function excluirCadastro(nome){
    var indice = nomes.indexOf(nome)
    if (indice !== -1){
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluido com sucesso")
    } else {
        console.log("Usuário não encontrado")
    }
}

var continuar = true
while (continuar){
    var opcao = perguntarUsuario()

    switch (opcao){
        case "1":
            fazerCadastro()
            break;
        case "2":
            var nome = prompt("digite seu nome:")
            var senha = prompt("digite sua senha")
            var login = fazerLogin(nome, senha)

            if (login) {
                console.log("Login feito com sucesso")
            } else {
                console.log("Nome ou senha incorretos!")
            }
            break;
        case "3":
            var nome = prompt("digite seu nome")
            excluirCadastro(nome)
            break;
        case "4":
            continuar = false
        default:
            console.log("Opção inválida. Tente novamente")
            break;
    }
}