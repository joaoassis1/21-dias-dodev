//Avaliação da turma
let alunos = []
let notas = []
let contador = 0
let continuar = truel
while (continuar){
   let nomeAlunos = prompt('Insira o nome do aluno')
   let notaAlunos = parseInt(prompt('Insira a nota do aluno'))
   alunos[contador] = nomeAlunos
   notas[contador] = notaAlunos
   contador++
}
   let resposta = prompt('Deseja inserir mais alunos?(s/n)')
   if (resposta != 's'){
       continuar = false
   }

console.log("Notas dos alunos:")
    for (let i = 0; i < alunos.length; i++){
        console.log(alunos[i] + " - " + notas[i])
}
let somaNotas = 0
    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
}
let mediaGeral = somaNotas / alunos.length
    console.log("Soma das notas: " + somaNotas)
    console.log("Média geral da turma: " + mediaGeral)