function Pessoa () { // função pessoa
    this.idade = 0 // atributo idade
    
    const self = this
    setInterval(function() {
        self.idade++
         console.log(this.idade)
    }/*.bind(this)*/, 1000) //representa a cada 1 s
}

new Pessoa
// setInterval - dispara uma função
// a partir do intervalo que você passou - milisegundos
// pode ser passada uma função anonima - sem parametros
// ctrl + alt + N dispara ou para
// variavel self = this bind porem não funcionou
// .bind(this) tras o pessoa da 1 function