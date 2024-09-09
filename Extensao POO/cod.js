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

class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.`);
    }
}

function apresentarPessoa(pessoa) {
    pessoa.apresentar();
}

const pessoa1 = new Pessoa("João", 30);
const aluno1 = new Aluno("Maria", 20, "A12345");

apresentarPessoa(pessoa1); // Olá, meu nome é João e tenho 30 anos.
apresentarPessoa(aluno1);  // Olá, meu nome é Maria, tenho 20 anos e minha matrícula é A12345.
