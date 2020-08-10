// CLASSE

// classe = function escrito de uma forma diferente

class Pessoa{
        constructor(nome) {
            this.nome = nome
        }    
        falar() {
            console.log(`Meu nome é ${this.nome}`)
        }
}                   

const p1 = new Pessoa('João')
p1.falar()


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FACTORY 
// DIFERENCIAL REFLETE VIA BROWSER
// factory -- function que retorna um objeto

const humano = name => {
    return {
        falar: () => console.log(`Meu nome é ${name}`)
    }
}

const h1 = humano('Suellen')
h1.falar()