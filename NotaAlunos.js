let SomaNotas = 0
let quantHomens = 0
let quantMulheresAcimadeSete = 0
let MaiorNotaHomens = 0


for (let i = 1; i <= 10; i++){
    let notaAluno = prompt("Insira a nota do aluno: ")
    let sexoAluno = prompt("Insira o sexo do aluno: (m - masculino, f - feminino")
    SomaNotas += notaAluno
    
    if (sexoAluno == "m"){
        quantHomens++
     
    if (notaAluno > MaiorNotaHomens){
        MaiorNotaHomens = notaAluno
    }
    } else if (sexoAluno == "f" && notaAluno > 7){
        quantMulheresAcimadeSete++
    }
    
}
    let mediaGeral = SomaNotas / 10

    console.log("A média geral dos alunos: " + mediaGeral)
    console.log("Quantidade de homens que enviaram suas notas: " + quantHomens)
    console.log("Mulheres que tiveram a nota acima de 7: " + quantMulheresAcimadeSete)
    console.log("Maior nota entre homens: " + MaiorNotaHomens)