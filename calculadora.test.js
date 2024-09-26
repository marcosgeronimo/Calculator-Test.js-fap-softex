const calculadora = require('./calculadora'); 

test('Deve retornar o resultado da soma de 10 e 5, que é 15', () => {
    expect(calculadora('soma', 10, 5)).toBe(15);
});

test('Deve retornar a diferença entre 20 e 5, que é 15', () => {
    expect(calculadora('subtracao', 20, 5)).toBe(15);
});

test('Deve retornar o resultado da divisão de 100 por 4, que é 25', () => {
    expect(calculadora('divisao', 100, 4)).toBe(25);
});


test('Deve retornar um erro ao tentar dividir por zero', () => {
    expect(calculadora('divisao', 100, 0)).toBe("Erro: Divisão por zero não permitida.");
});
