function transporMatriz(A){
    let matrizString = '';

    for(i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            matrizString += A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log(matrizString);

    let matrizTranspostaString = '';
        for(let J = 0 ; J < [A]; J++){
            for(let i = 0; i < A.length; i++){
                matrizTranspostaString += A[i][j] + '';
            }
            matrizTranspostaString += '\n';
        }
    console.log(matrizTranspostaString);
}

const A = [
    [1,2],
    [3,4],
    [5,6]
];
transporMatriz(A)