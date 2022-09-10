"use strict";
const BurguerK = {
    nome: "Burguer K",
    endere: "Rua 2",
    status: true,
};
console.log(BurguerK);
function novaLoja({ nome, endere, status }) {
    console.log(nome);
    console.log(endere);
    console.log(status);
    console.log("===============");
}
novaLoja({ nome: "ReBruno", endere: "Logo ali", status: true });
