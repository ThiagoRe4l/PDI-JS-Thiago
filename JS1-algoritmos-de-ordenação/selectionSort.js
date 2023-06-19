//SelectionSort => ordenamento por seleção, pega o menor valor e colocar na primeira posição.
const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const troca = require('./trocaSelection');

livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)
    troca(livros, indice, menor)
})

console.log(livros);