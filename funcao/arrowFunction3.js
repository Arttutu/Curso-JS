let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global) //true
const obj = {}
comparaComThis = comparaComThis.bind(obj) //agora aponta para obj
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true
