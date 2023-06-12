const clientes = require('./clientes.json');

function filtrarApSemComplemento(client){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarApSemComplemento(clientes);

console.log(filtrados);