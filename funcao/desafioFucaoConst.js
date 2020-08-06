// FUCAO CONSTRUTORA

function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Suellen Souza')
p1.falar()

// factory - funçao que retorna um obj