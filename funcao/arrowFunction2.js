function Pessoa() {
  this.idade = 0

  setInterval(
    // funções arrow  o this não varia
    () => {
      this.idade++
      console.log(this.idade)
    } /*.bind(this)*/,
    1000
  )
}
new Pessoa()
