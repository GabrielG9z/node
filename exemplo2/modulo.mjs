function soma(valor1, valor2){
    return valor1 + valor2;
};

function multiplica(valor1, valor2){
    return valor1 * valor2;
};

//Passo 1 - Criamos uma função.
function divide(valor1, valor2){
    return valor1 / valor2;
}

// Passo 2 - Exportamos a função.
export {soma,multiplica,divide};
// Quando exportamos mais de uma 'função', precisamos declarar entre chaves.
