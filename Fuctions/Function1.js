//Arrays para armazenar nomes e senhas
var nomes = [];
var senhas = [];
var contador = 0;

//Função para cadastrar um novo usuário
cadastrarUsuario()
function cadastrarUsuario(){
    var nome = prompt("Digite seu nome");
    var senha = prompt("Digite sua senha");

    nomes[contador] = nome;
    senhas[contador] = senha;
    contador++;
    console.log("Usuário cadastrado com sucesso");
}

//Função para exibir as opções e obter a escolha do usuário
exibirMenu()
function exibirMenu(){
    var opcao = parseInt(prompt("Escolha uma das opções: \n1 - Cadastrar \n2 - Fazer login \n3 - Excluir um cadastro \n4 - Encerrar o programa"));
   return opcao;
}

//Função para fazer login
fazerlogin()
function fazerlogin(){
   var nome = prompt("Digite seu nome");
   var senha = prompt("Digite sua senha");

   for(var i = 0; i < nomes.length; i++){
    if(nome == nomes[i]){
        if (senha == senhas[i]){
            return true;
        }
    } else if (i == nomes.length - 1){
        return false;
        }

    }
}

//Função para excluir um cadastro
excluirCadastro()
function excluirCadastro(){
    var nomesSup = [];
    var senhasSup = [];
    var contSup = 0;
    var nome = prompt("Digite o nome que deseja excluir");

    for(var i = 0; i < nomes.length; i++){
        if (nome == nomes[i]){
            console.log("Usuário excluido com sucesso");
        } else {
            nomesSup[contSup] = nomes[i];
            senhasSup[contSup] = senhas[i];
            contSup++;
        }
    }

    nomes = nomesSup;
    senhas = senhasSup;
}

//Fluxo de funcionamento do programa
var continuar = "s"
while(continuar == "s"){
    var opcao = exibirMenu();
    switch(opcao){
    case 1:
            cadastrarUsuario();
        break;
    case 2:
            var login = fazerlogin();
            if (login == true){
                console.log("Login feito com sucesso")
            } else {
                console.log("Usuário não encontrado")
            }
        break;
    case 3:
            excluirCadastro();
        break;
    case 4:
        console.log("Programa encerrado")
        continuar = "n"
        break;
    default:
            console.log("Opção inválida")
        break;
    }
    if (continuar == "s")
    continuar = prompt("Deseja realizar outra operação? (s/n)")
}
cadastrarUsuario()