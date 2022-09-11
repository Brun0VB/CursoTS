"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUser(uuid) {
    console.log(`conta referente a UUID: ${uuid}`);
}
function compraritem(moeda) {
    console.log('Moeda usada:', moeda);
}
compraritem("EUR");
