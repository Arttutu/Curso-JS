
// RECEBE OS VALORES E EXECUTA  O BLOCO DA FUNÇÃO. PODE OU NÃO RETORNAR ALGUM VALOR
function imprimirSoma (a,b){

  const  valor = a + b
  return valor
}


 const resultado = imprimirSoma(1,2)
 const resultado2 = imprimirSoma(1,2,3,4,5,6,7,8,9,9) //não dá erro flexibilidade
 const resultado3 = imprimirSoma() // Not a number, somando vazio

 console.log(resultado)
 console.log(resultado2)
 console.log(resultado3)