const funcaoCallback = (valor: number): void => {
    console.log("DEU BOM!" + valor);
};

const funcaoTeste = (
    valor1: number,
    valor2: number,
    funcaoCallback: (valor: number) => void
    ): string => {

        if(valor1 > valor2){
            funcaoCallback(valor1);
        }
    return '';
}

console.log(funcaoTeste(40,30,funcaoCallback));

funcaoTeste(42,23,(x: number) => {
    console.log("Funcao anonima" + x);
})