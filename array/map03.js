//entendendo como a funçao map por de trás dos panos
Array.prototype.map2 = function (callback) {
  const newArray = []
  for (let i; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return newArray
}
const carrinho = [
  '{"nome":"borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco": 13.90}',
  '{"nome":"Kit de Lapis", "preco": 41.22}',
  '{"nome":"Caneta", "preco": 7.50}',
]
//retorna um array apenas com os preços
const paraObjeto = (json) => JSON.parse(json)
const apenasPreco = (produto) => produto.preco
const resultado = carrinho.map(paraObjeto).map2(apenasPreco)

console.log(resultado)
