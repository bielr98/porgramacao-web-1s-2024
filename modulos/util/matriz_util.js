// matriz_util.js

// Função para transpor uma matriz
function transporMatriz(A){
    let matrizString = '';

    // Matriz original
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[i].length; j++){
            matrizString += A[i][j] + ' ';
        }
        matrizString += '\n';
    }
    console.log("Matriz Original:");
    console.log(matrizString);

    // Matriz transposta
    let matrizTranspostaString = '';
    for(let j = 0; j < A[0].length; j++){ // Use A[0].length para evitar problemas se as linhas da matriz forem de comprimentos diferentes
        for(let i = 0; i < A.length; i++){
            matrizTranspostaString += A[i][j] + ' ';
        }
        matrizTranspostaString += '\n';
    }
    console.log("Matriz Transposta:");
    console.log(matrizTranspostaString);
}

// Exportar a função para que ela possa ser usada em outros arquivos
module.exports = { transporMatriz };
