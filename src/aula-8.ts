class Outro{
    endereco: string;

    constructor(){
        this.endereco = "";
    }
};

interface Carro{
    idade: number | string;
    nome: string;
};

interface Bicicleta{
    rodas: number;
}

const funcao = (validacao: boolean): Carro | Bicicleta | Outro=> {
    if(validacao){
        return {
            idade:'33',
            nome:'Ford'
        };
    }
    return {
        endereco: "rua 9"
    };
};

const resultado = funcao(false);

if("endereco" in resultado){
    console.log(resultado.endereco);
};

if("idade" in resultado){
    if(typeof resultado.idade == "string"){
    console.log(resultado.nome);
    }
};

if("rodas" in resultado){
    console.log(resultado.rodas);
};