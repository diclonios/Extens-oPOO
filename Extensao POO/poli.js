function apresentarPessoa(pessoa) {
    pessoa.apresentar();
}

const pessoa1 = new Pessoa("João", 30);
const aluno1 = new Aluno("Maria", 20, "A12345");

apresentarPessoa(pessoa1); // Olá, meu nome é João e tenho 30 anos.
apresentarPessoa(aluno1);  // Olá, meu nome é Maria, tenho 20 anos e minha matrícula é A12345.
