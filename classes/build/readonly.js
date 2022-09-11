"use strict";
class Pessoa {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.RG = rg;
    }
}
const eu = new Pessoa("Bruno", 18, "MG18256234");
console.log(eu);
