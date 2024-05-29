exports.calcularOperacao = (num1, num2, operador) => {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
};

exports.obterOperadorNome = (operador) => {
    switch (operador) {
        case '+':
            return 'Adição';
        case '-':
            return 'Subtração';
        case '*':
            return 'Multiplicação';
        case '/':
            return 'Divisão';
        default:
            return '';
    }
};