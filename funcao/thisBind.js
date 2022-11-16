// THIS objeto atual daquela execução
//ele pode variar, dependendo de como for chamado
const pessoa = {
  saudacao: "bom dia",
  falar() {
    console.log(this.saudacao)
  },
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientada a objeto

const falarPessoa = pessoa.falar().bind(pessoa)
falarPessoa()
