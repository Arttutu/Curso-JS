const imprimirSoma = function (valor1, valor2){
        console.log(valor1 + valor2)
}


imprimirSoma(2,3)


//funcção arrow forma reduzinda de escrever uma função

const soma = (a,b) =>{
    return a + b
}

console.log(soma(2,3))

//retorna implícito, sem corpo {} a função tem apenas uma linha e é retornado
// => substitui a plavra function

const subtracao = (a,b) => a - b

console.log(subtracao(5,2))