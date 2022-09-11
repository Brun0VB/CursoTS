"use strict";
class Usuario {
    constructor(id, nome, email) {
        this.nome = nome;
        this.email = email;
        this.id = id;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo() {
        console.log("Alterando Cargo");
    }
}
const adm1 = new Admin(123, "Bruno", "brunovilela2002@hotmia.com", "Aluno", 0);
