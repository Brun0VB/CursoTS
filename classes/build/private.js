"use strict";
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentaLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade + 450;
        }
    }
    solicitarLimite(autenticado, quantidade) {
        if (autenticado) {
            this.aumentaLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
const fulano = new Conta();
fulano.solicitarLimite(true, 3465);
