console.log(typeof Array, typeof new Array, typeof [])


let aprovado = new Array ('bia', 'ana', ' carlos')


aprovado = ['bia','carlos','Ana']

console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])

//usado paraadcionar um elemento ou substituir 
aprovado[3] = 'paulo'
//metodo mais comum para adcionar elemento
aprovado.push('Abia')
console.log(aprovado.length)

aprovado[9] = 'rafel'

console.log(aprovado.length)
console.log(aprovado[9]=== undefined)
console.log(aprovado)
//sort ordena o array
aprovado.sort()
console.log(aprovado)
//delete  e deixa vazio

delete aprovado[1]
aprovado = ['bia','carlos','Ana']
console.log(aprovado[1])
console.log(aprovado[2])
aprovado.slice(1,1, 'elemento1', 'elemento2')
console.log(aprovado)