const aprovado = ["agatha", "aldo", "daniel", "ana"]
// percorre um array com o laço for
// forEach recebe só três paramêtros, mas você pode suprimir os parametros que vc quiser
// sempre o segundo é o índice
aprovado.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome} `)
  console.log(array)
})
aprovado.forEach(function (nome) {
  console.log(nome)
})
aprovado.forEach((nome) => console.log(nome))

const exibirAprovados = function (aprovado) {
  console.log(aprovado + " aprovados 1")
}
const exibirAprovados2 = (aprovado) => console.log(aprovado + " aprovados 2")

aprovado.forEach(exibirAprovados)
aprovado.forEach(exibirAprovados2)

/* saída

1) agatha 
[ 'agatha', 'aldo', 'daniel', 'ana' ]
2) aldo 
[ 'agatha', 'aldo', 'daniel', 'ana' ]
3) daniel 
[ 'agatha', 'aldo', 'daniel', 'ana' ]
4) ana 
[ 'agatha', 'aldo', 'daniel', 'ana' ]
agatha
aldo
daniel
ana
agatha
aldo
daniel
ana
agatha aprovados 1
aldo aprovados 1
daniel aprovados 1
ana aprovados 1
agatha aprovados 2
aldo aprovados 2
daniel aprovados 2
ana aprovados 2


*/
