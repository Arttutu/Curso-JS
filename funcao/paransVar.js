function soma() {
  let soma = 0
  for (i in arguments) {
    //arguments é um array e vai pegar o índice i de cade element(pega todo os argumentos enviado para a função)
    soma += arguments[i]
  }
  return soma
}

const result = soma(1, 2, 3, 4, 5, 5)
console.log(result)
