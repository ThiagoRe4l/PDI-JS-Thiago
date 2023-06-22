import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role)
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}.`
    }
}

const novoDocente = new Docente('Mariana', 'mariana@gmail.com', '2021-01-01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'))