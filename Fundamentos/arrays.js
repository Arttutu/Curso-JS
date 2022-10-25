// é uma bibllioteca que armezana o valor e a sua posição, é um vetor
const valores = [
    7,
    8,
    9,
    10
]
console.log(valores[0], valores[3])
console.log(valores.length) // Tamanho do array

valores.push({id: 3}, false, null, 'teste') //adicionar valores ao array
console.log(valores)

console.log(valores.pop()) // remove o ultimo valor do array
console.log(valores)

delete valores[0] // remove qualquer índice do array
console.log(valores)
console.log(typeof valores)

