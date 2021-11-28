// Criando uma variável tipada
const isValid: boolean = true;
//do tipo number
const actualYear: number = 2021;
// do tipo string
const aula: string = "Iniciando com TypeScript!";

console.log(`${isValid} ${actualYear} ${aula}`);

// Outros Tipos de Dados
let idade: any; // Aceita qualquer valor
idade = 18;
idade = "dezoito";

// Vetores e Arrays
const meses: string[] = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
console.log(meses)
const frutas: Array<string> = ["laranja", "banana", "maracujá"];
console.log(frutas)

// Tuplas
const aluno: [string, number] = ["Alysson", 21];
console.log(aluno)

// Numeração de Variáveis Enums
enum Tecnonologias {
    TypeScript,
    Node,
    React,
    TypeORM,
    PostgreSQL
}

console.log(Tecnonologias.TypeScript)
console.log(Tecnonologias.Node)
console.log(Tecnonologias.React)
console.log(Tecnonologias.TypeORM)
console.log(Tecnonologias.PostgreSQL)

interface Aluno {
    nome: string,
    idade: number,
    publica: boolean,
    notas: number[],
    calculaMedia(): void
}

const aluno1: Aluno = {
    nome: "Rafael",
    idade: 20,
    publica: true,
    notas: [10,0,1,10],
    calculaMedia() {
        let soma = this.notas.reduce((total, elemento) => total + elemento)
        console.log(soma/this.notas.length)
    }
}

console.log(aluno1)
console.log(aluno1.calculaMedia())

// Criar interfaces com typescript
interface Saudacao{
    bomDia(mensagem: string): void
    boaTarde(mensagem: string): void
    boaNoite(mensagem: string): void
}

class Superior{
    protected titulacao: string;

    constructor(titulacao : string){
        this.titulacao = titulacao;
    }
}

// criar classes que implementam a interface Saudação
class Professor extends Superior implements Saudacao{
    private nome: string;

    //função construtora
    constructor(nome:string, titulacao:string){
        super(titulacao); // construtorda superclasse
        this.nome = nome;
    }

    // Criando os Métodos da interface
    public bomDia(mensagem: string): void{
        console.log(`${mensagem}, querid@ ${this.nome} com titulação de ${this.titulacao}`)
    }
    public boaTarde(mensagem: string): void{
        console.log(`${mensagem}, querid@ ${this.nome} com titulação de ${this.titulacao}`)
    }
    public boaNoite(mensagem: string): void{
        console.log(`${mensagem}, querid@ ${this.nome} com titulação de ${this.titulacao}`)
    }
}

// exemplo de instancia
let prof1 = new Professor ("Daniel", "Doutor"); // chama construtor
prof1.bomDia("Seja bem-vind@, tenha um excelente dia!");
prof1.boaTarde("Seja bem-vind@, tenha uma excelente tarde!");
prof1.boaNoite("Seja bem-vind@, tenha uma excelente noite!");