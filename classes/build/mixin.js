"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aplyMixin_1 = require("./mixin/aplyMixin");
class Automovel {
    ligar() {
        console.log("Automovel ligado");
    }
    desligar() {
        console.log("Automovel desligado");
    }
}
class Especifica {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, aplyMixin_1.applyMixins)(Carro, [Automovel, Especifica]);
const gol = new Carro("Gol 1.6");
