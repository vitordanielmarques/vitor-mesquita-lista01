/*
Crie um array, onde cada elemento representa uma turma com
as seguintes propriedades:
- nomeProfessor: uma string contendo o nome do professor.
- alunos: um array de objetos, onde cada objeto representa 
um aluno com as propriedades:
 - nome: nome do aluno.
 - nota: nota do aluno.

Após criar a estrutura, crie um método que ordene os alunos 
de cada turma em ordem crescente de nota, e outro método 
que imprime a mensagem de acordo com a condição:
"Parabéns <nome_aluno> , você foi aprovado com a nota X" caso
a nota seja >= 7
"Não foi dessa vez <nome_aluno>, você reprovou com a nota X"
caso a nota seja <7
*/

const turmas = [
    { nomeProfessor: 'Murilo',
        alunos: [
            { nome: 'Antonio',
              nota: 9.9
            },
            { nome: 'Kemy',
              nota: 10
            },
            { nome: 'Pedro',
              nota: 9.8
            },
            { nome: 'Fulano',
              nota: 0.5
            }
        ]
    }
]

/*
for (let i = 0; i < turmas.length; i++) {

    let turma = turmas[i]; ordenação em for

    o sort compara dois elementos por vez.

    se fosse decrescente seria b.nota - a.nota.
*/

function ordenarAlunos(turmas){
    for (const turma of turmas) {
        turma.alunos.sort((a, b) => a.nota - b.nota);
    }
}

function aprovacao(turmas) {
    for (const turma of turmas) {
        for (const aluno of turma.alunos) {
            if (aluno.nota >= 7) { 
                console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
            } else {
                console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
            }
        }
    }
}

ordenarAlunos(turmas);
aprovacao(turmas);

 /*
tem esse for, mas preferi usar o for of, que é mais moderno, mais legível e mais rápido de escrever.
    for (let i = 0; i < turmas.length; i++) {
        
        for (let j = 0; j< turmas[i].alunos.length; j++) {
            let aluno = turmas[i].alunos[j];
            if (aluno.nota >=7){
                console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
            } else {
                console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
            }
        }
    }
}
    */