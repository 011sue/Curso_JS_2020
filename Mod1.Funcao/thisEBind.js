const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// bind e this
// metodo responsavel por amarrar um determinado objeto
// quando vc chamar a função quando vc usar o this será o objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()