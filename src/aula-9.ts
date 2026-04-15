interface Andar {
    passos: number | null;
}

const andar: Andar = {
    passos: null
}

const funcaoTeste = (): undefined | number => {
    if(andar.passos && andar.passos> 5){
        return 10;
    }
    return undefined;
}

const qualquer = funcaoTeste();

if(!andar.passos){
    console.log("É null!");
}

if(qualquer){
    qualquer.toFixed();
}

console.log("andar", andar);