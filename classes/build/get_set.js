"use strict";
class Jogo {
    constructor(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    get getServidor() {
        return this.servidor;
    }
    set setServidor(novoIp) {
        this.servidor = novoIp;
    }
}
const sf5 = new Jogo("192.367.23.2");
console.log(sf5.getServidor);
console.log(sf5.setServidor = "198.162.0.0");
