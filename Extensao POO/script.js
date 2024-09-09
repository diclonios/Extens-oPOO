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
        return `Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e minha matrícula é ${this.matricula}.`;
    }
}

const listaPessoas = [];

document.getElementById('pessoaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const pessoa = new Pessoa(nome, idade);
    listaPessoas.push(pessoa);
    atualizarLista();
});

document.getElementById('alunoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;
    const matricula = document.getElementById('matricula').value;
    const aluno = new Aluno(nome, idade, matricula);
    listaPessoas.push(aluno);
    atualizarLista();
});

function atualizarLista() {
    const lista = document.getElementById('listaPessoas');
    lista.innerHTML = '';
    listaPessoas.forEach(pessoa => {
        const li = document.createElement('li');
        li.textContent = pessoa.apresentar();
        lista.appendChild(li);
    });
}
