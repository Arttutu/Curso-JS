// Funcionamento de um forEach
Array.prototype.forEach2 = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i], i, this) //valor, índice, array
  }
}
const aprovado = ["agatha", "aldo", "daniel", "ana"]

aprovado.forEach2(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome} `)
  if (indice == 0) {
    console.log(array)
  }
})
