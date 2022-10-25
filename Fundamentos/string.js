const escola = 'fiap'
// função charAt pega a letra na posição
console.log(escola.charAt(3))
// valor do caracter na tabela Asc
console.log(escola.charCodeAt('3'))
// índice do elemento
console.log (escola.indexOf('f'))
// começa no índice 1
console.log(escola.substring(1))
// não inclui o final
console.log(escola.substring(0,3))

// concatenar strings

console.log('faculdade '.concat(escola).concat('!'))
console.log('faculdade ' + escola + '!')

// string em array quebrando na virgula
console.log('Arthur, Ana, Pedro, carol, camila'.split(','))
