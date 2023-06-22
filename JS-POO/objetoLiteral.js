const user = {
    nome: "ThiagoRe4l",
    email: "tl7thiago@gmail.com",
    nasc: "15/01/2001",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();

//const exibir = user.exibirInfos
//exibir()
//essa atribuição faz a mesma coisa que a função abaixo.
const exibir = function() {
    console.log(this.nome)
}
//exibe undefined pq não refere o this a nada.

//ao utilizar o bind ele faz a referencia ao user, assim exibindo o objeto corretamente.
const exibirNome = exibir.bind(user)
exibirNome()
exibir()