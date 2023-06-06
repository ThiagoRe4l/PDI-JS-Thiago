const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if (listaAlunosMedias[0].includes(aluno)) {

        const [alunos, medias] = listaAlunosMedias;

        const indice = alunos.indexOf(aluno);

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeNota("Ana");