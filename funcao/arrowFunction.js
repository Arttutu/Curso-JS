let dobro = function (a) {
  return a * 2
}
dobro = (a) => {
  return 2 * a
}
dobro = (a) => 2 * a //return implicito
console.log(dobro(Math.PI))
let ola = function (a) {
  return "olá"
}
ola = () => "olá" //return implicito

console.log(ola())
