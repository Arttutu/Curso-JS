//Mapear elementos de um array para outro, porém eles tem que ter o mesmo tamanho

const nums = [1, 2, 3, 4, 5]

//for com propósito

let resultado2 = nums.map((e) => e * 4)
let resultado = nums.map(function (e) {
  return e * 2
})

console.log(resultado)
console.log(resultado2)

const soma10 = (e) => e + 10
const triplo = (e) => e * 3
const paraDininheiro = (e) =>
  ` R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`
resultado = nums.map(soma10).map(triplo).map(paraDininheiro)
console.log(resultado)
