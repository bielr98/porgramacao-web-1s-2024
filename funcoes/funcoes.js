function imprimirOperacao(){
    let a = 2;
    let b = 3;
    console.log(`O Resultado da soma Entre ${a} e ${b} é ${a + b}`);
}
imprimirOperacao()

function imprimirOperacaoV2(a, b){
    console.log(`O Resultado da soma Entre ${a} e ${b} é ${a + b}`);
}
imprimirOperacaoV2(3, 5)
imprimirOperacaoV2(1, 2)
imprimirOperacaoV2('1', '2')

function imprimirOperacaoV3(a, b, c){
    let c;

    switch (op) {
        case '+':
            c = a+b;
            break;

        case '-':
            c = a-b;
            break;    

        case '*':
            c = a*b;
            break;
        case '/':
            c = a/b;
            break;

        default:
            break;
    }
    console.log(`O Resultado de ${a} ${op} ${b} = ${c}`)
}