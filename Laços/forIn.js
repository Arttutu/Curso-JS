const notas = [62, 74, 33, 34, 43, 54, 62, 42, 22]
for (let i in notas) {
  console.log(i, notas[i])
}
const pessoa = {
  nome: "ana",
  sobrenome: "silva",
  idade: 24,
  peso: 64,
}
for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
