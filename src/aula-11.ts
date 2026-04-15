class Escola {
    public readonly nome: string;
    private readonly alunos: Aluno[];

    constructor(nome: string){
        this.nome = nome;
        this.alunos = [];
    }

    public adicionarAluno = (aluno: Aluno) => {
        this.alunos.push(aluno);
    }
}

class Aluno {
    constructor(public readonly nome:string){
    }
}

const aluno1 = new Aluno("Jose");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("Marcos");
const aluno4 = new Aluno("Olivia");
const escola = new Escola ("Maria erdis");

escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);
escola.adicionarAluno(aluno3);
escola.adicionarAluno(aluno4);

console.log("Escola:", escola);