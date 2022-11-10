function rand([min = 0, max = 1000]){
//ARRUMA A ORDEM, NÃO PRECISA PASSAR O VALORES NA ORDEM
    if(min >max){

        [min, max] = [max, min]
    } 
    //ESCOLHA UM NÚMERO NO INTERVALO
    const valor = Math.random() * (max-min) + min
    //arredonda para baixo floor
    return Math.floor(valor)

}

console.log(rand([50, 40]))