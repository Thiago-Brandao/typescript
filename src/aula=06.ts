interface ObjetoQualquer{
    functiom: (parametro1: number, parametro2?: number) => number;
}

const funcaoTeste = (parametro1: number, parametro2?: number): number =>{
    if(!parametro2){
        return parametro1;
    }
    return parametro1 + parametro2;
}

const teste: ObjetoQualquer ={
    functiom: funcaoTeste
}

console.log(teste.functiom(10,10));