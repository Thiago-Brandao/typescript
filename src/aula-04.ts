interface Pessoa{
    idade: number;
    nome: string;
};


interface Usuarios{
    pessoa: Pessoa[];
    ciade: string;
};

const usuario: Usuarios = {
    ciade: 'luziania',
    pessoa:[
        {
            idade: 20,
            nome:'Ana'
        },
         {
            idade: 40,
            nome:'João'
        }
    ]
};

console.log(usuario.pessoa.length);
console.log(usuario);