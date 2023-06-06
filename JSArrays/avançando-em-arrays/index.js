const numeros = [43, 50, 65, 12]

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.

const soma = numeros.reduce((acc, atual) => atual + acc, 0) //A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual. Função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.

console.log(soma)