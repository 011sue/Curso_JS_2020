// parametro vel.max valor maximo a ser atingido
// parametro delta - velocidade no qual será repetido o interval


function Carro(velocidadeMaxima = 280, delta = 6) {
    // atributo privado
    let velocidadeInicial = 0

    // metodo publico utilizando this
    this.acelerar = function (){
        if (velocidadeInicial + delta <= velocidadeMaxima) {
            velocidadeInicial+= delta
        } else {
            velocidadeInicial = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelInit = function () {
        return velocidadeInicial
    }
}

const uno = new Carro // pode usar com ou sem ()

uno.acelerar()
console.log(uno.getVelInit())

const ferrari = new Carro (320, 160) // necessario porque entra paramentros
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelInit()) // retorna 320 que é o valor max

console.log(typeof Carro)
console.log(typeof ferrari)

// let e const é obj privado
// this obj publico