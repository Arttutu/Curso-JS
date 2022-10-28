const saudacao = 'opa' // contexto léxico 1

function exec (){

    const saudacao = 'falaaaa' // contexto léxico 2  ou scopo
    return saudacao

}

// objetos são grupos aninhados de pares nome/ valor

const client={
    nome:'pedro',
    idade:32,
    peso: 90,
    endereco: {
        logradouro: 'minha rua',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)