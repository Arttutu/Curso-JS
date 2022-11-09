// recursp do ES 2015

const pessoa = {

    nome: 'Ana',
    idade: 23,
    endereco: {
        logradouro: "rua abc",
        numero: 100
    }


}
const {nome, idade} = pessoa
console.log(nome,idade)
const {nome: n, idade: i} = pessoa
console.log(n,i)
// se não vier nada do objeto por padrão assuma o verdadeirp
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome,bemHumorada)
//acessando dentrod de objeto dentro de outro
const{endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

//erro o pai precisa está definido
//const{conta : {agencia, numero1}} = pessoa
//console.log(agencia, numero1)




