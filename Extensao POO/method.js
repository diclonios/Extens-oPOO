class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(novaIdade) {
        if (novaIdade > 0) {
            this._idade = novaIdade;
        } else {
            console.log("Idade inválida!");
        }
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`);
    }
}
