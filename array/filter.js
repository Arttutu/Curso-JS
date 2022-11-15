//filtra o array, criando um sub array

//exemplo documentação
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]

const result = words.filter((word) => word.length > 6)

console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "ipad Pro", preco: 4000, fragil: true },
  { nome: "copo de vidro", preco: 2.49, fragil: true },
  { nome: "copo de plástico", preco: 10, fragil: false },
] /*
console.log(
  produtos.filter(function (produto) {
    if (produto.preco > 500 && produto.fragil == true) {
      return produto
    }
  })
) */
const produtoCaro = (produto) => produto.preco >= 500
const produtoFragil = (produto) => produto.fragil

const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado)
