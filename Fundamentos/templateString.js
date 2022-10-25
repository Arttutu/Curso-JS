const  nome = 'rebeca';
const concatenacao = 'olá' + nome + '!'
// template String considera a quebra de linha no código
const template = `
    olá
    ${nome}!`

console.log(concatenacao,template)


//expressões
console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase() 
// chamando a função up e passando o nome cuidado
console.log(`Ei... ${up('cuidado')}!`)