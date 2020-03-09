const alunosDaEscola = [
    {
        nome:"Henrique",notas:[],cursos:[],faltas:5
    },
    {
        nome:"Edson",notas:[],cursos:[],faltas:2
    },
    {
        nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0
    },
    {
        nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0
    },
    {
        nome:"Carlos",notas:[],cursos:[],faltas:0
    },
    {
        nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0
    }
];
console.log('--------------------------------------------------------------------')
   
function listarAlunos(){
    const Alunos = alunosDaEscola.map(alunosListados => alunosListados.nome);
    console.log('Os alunos matriculados são: ' + Alunos)
    console.log('--------------------------------------------------------------------')
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
}

function buscarAluno(nome){
    alunosDaEscola.indexOf(nome) ? console.log(`O aluno ${nome} existe no banco de dados`) : console.log('Aluno não existe no banco de dados!')
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    console.log('--------------------------------------------------------------------')
  }

function matricularAluno(aluno, curso){
    let Curso = {nomeDoCurso: curso, dataMatricula:new Date}
    for(let alunoProcurado of alunosDaEscola){
    if(alunoProcurado.nome == aluno){
    alunoProcurado.cursos.push(Curso) 
    console.log('Aluno cadastro com sucesso!')
    console.log('--------------------------------------------------------------------')
     }
    }
        /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
}



function aplicarFalta(aluno){
    const buscarAluno = alunosDaEscola.find(alunoFaltante => alunoFaltante.nome == aluno)
    if(buscarAluno){
    if(buscarAluno.cursos.length == !0){
        buscarAluno.faltas += 1;
        console.log('Falta adicionada com sucesso!')
    } else {
        console.log('Aluno não está matriculado em algum curso!')
    }
} else {
    console.log('Aluno não existe no nosso banco de dados!')
    }
    console.log('--------------------------------------------------------------------')
     // Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
}


function aplicarNota(aluno){
    const buscarAluno = alunosDaEscola.find(valorDeAluno => valorDeAluno.nome == aluno)
    if(buscarAluno){
    if(buscarAluno.cursos.length == !0){
        buscarAluno.notas += 1;
        console.log('Nota adicionada com sucesso!')
    } else {
        console.log('Aluno não está matriculado em algum curso!')
    }
} else {
    console.log('Aluno não existe no nosso banco de dados!')
    }
    console.log('--------------------------------------------------------------------')
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
}

function aprovarAluno(aluno){
    const buscarAluno = alunosDaEscola.find(valorDeAluno => valorDeAluno.nome == aluno)
    if(buscarAluno){
    if(buscarAluno.cursos.length == !0){
        let soma = buscarAluno.notas.reduce((total, element) => total+element)
        let media = soma/buscarAluno.notas.length
        if (media >= 7 && buscarAluno.faltas <=3){
            console.log('Aluno aprovado!')
        } else {
            console.log('Aluno reprovado!s')
        }
    } else {
        console.log('Aluno não está matriculado em algum curso!')
    }
} else {
    console.log('Aluno não existe no nosso banco de dados!')
    }
    console.log('--------------------------------------------------------------------')
        /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
}


console.log(alunosDaEscola)
listarAlunos()
buscarAluno("Claudia")
matricularAluno("Henrique", "UX")
aplicarFalta("Guilherme")
aplicarNota('Guilherme')
//aprovarAluno("Guilherme")