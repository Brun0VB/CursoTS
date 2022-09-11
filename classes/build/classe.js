"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria ${this.categoria}`);
    }
    emitir(mesa) {
        return `Atenção ${this.nome} Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "Aberto") {
            console.log(this.nome + " Aberta com sucesso");
        }
        else {
            console.log(this.nome + " Fechada com sucesso");
        }
    }
}
const Burguer = new Loja("BK", "Lanchonete");
const Burguer2 = new Loja("MC", "Lanchonete");
Burguer.criarLoja();
Burguer2.criarLoja();
console.log(Burguer.emitir(32));
Burguer.mudarStatus("Fechado");
