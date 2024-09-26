function calculadora(operacao, num1, num2) {
    try {
        switch (operacao) {
            case 'soma':
                return num1 + num2;
            case 'subtracao':
                return num1 - num2;
            case 'multiplicacao':
                return num1 * num2;
            case 'divisao':
                if (num2 === 0) {
                    throw new Error("Error: Divisão por zero não permitida.");
                }
                return num1 / num2;
            default:
                throw new Error("Error: Operação inválida.");
        }
    } catch (error) {
        return error.message;
    }
}


module.exports = calculadora;


