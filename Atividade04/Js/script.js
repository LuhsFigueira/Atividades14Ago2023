// Função para ordenar os nomes dos alunos em ordem alfabética
function ordenarAlunos(alunos) {
    return alunos.sort();
}

// Função principal do programa
function insercaoAlunos() {
    const alunos = [];
    
    // Obter o número de alunos da disciplina
    const quantidadeAlunos = parseInt(prompt('Digite a quantidade de alunos:'));
    
    // Preencher a lista de alunos
    for (let i = 0; i < quantidadeAlunos; i++) {
        const nomeAluno = prompt(`Digite o nome do aluno ${i + 1}:`);
        alunos.push(nomeAluno);
    }
    
    // Ordenar os nomes dos alunos
    const alunosOrdenados = ordenarAlunos(alunos);
    
    // Exibir a relação de alunos e a quantidade de alunos
    document.write('Relação de alunos:');
    for (let i = 0; i < alunosOrdenados.length; i++) {
        document.write(`${i + 1}. ${alunosOrdenados[i]}`);
    }
    
    document.write(`Total de alunos: ${alunosOrdenados.length}`);
}

