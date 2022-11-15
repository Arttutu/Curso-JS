const pilotos = ["vetel", "Alonso", "Raikkonen", "Massa"]
//Retira o ultimo elemento do array
pilotos.pop() // ["vetel", "Alonso", "Raikkonen"]
//Coloca o elemento na ultima linha
pilotos.push("Verstappen") //  ["vetel", "Alonso", "Raikkonen", "Verstappen"]
//Retira o primeiro elemento do array
pilotos.shift() //  [ "Alonso", "Raikkonen", "Verstappen"]
// Coloca no primeiro elemento do array
pilotos.unshift("Hamilton") //["Hamilton", "Alonso", "Raikkonen", "Verstappen"]

//Splice pode adicionar e remover
//No (x, y) = x- inicio e y - fim
//no exemplo antes do "raikkonen" que tem índice 2 ele adiciona o "bottas" e "massa"
pilotos.splice(2, 0, "bottas", "Massa")
console.log(pilotos)
//Removendo através do Splice
pilotos.splice(3, 1)
console.log(pilotos)
// Método retorna um novo array, a partir do índice que está passando
const algunsPilotos1 = pilotos.slice(2)
console.log("Alguns pilotod 1: " + algunsPilotos1)
// Pode definir um intervalo o ultimo numero passado não entra no array
const algunsPilotos2 = pilotos.slice(1, 4)
