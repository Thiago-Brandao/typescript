interface Estado{
    nome: string;
}


interface Cidade{
    nome: string;
    estado: Estado;
}

interface Endereco{
    rua: string;
    bairro: string;
    cidade: Cidade;
    complemento?: string;
};

const endereco: Endereco = {
    bairro: 'Setor maravilha',
    rua: 'rua 9',
    //complemento:"moro ao lado de uma torre de telefonia",
    cidade: {
        nome: 'luziania',
        estado: {
            nome:"GO"
        }
    }
}

console.log(endereco.complemento?.substring(3) || "COMPLEMENTO INDEFINIDO");
console.log(endereco);