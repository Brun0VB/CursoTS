class Pessoa{
    nome: String;
    idade: number;
    readonly RG: string; // acessível em qualquer lugar, mas não pode ser modificada

    constructor(nome: String,idade:number,rg: string){
        this.nome =nome;
        this.idade = idade;
        this.RG = rg;
    }
}

const eu  = new Pessoa("Bruno",18,"MG18256234");

console.log(eu)