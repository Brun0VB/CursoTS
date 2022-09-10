"use strict";
const novoUsuario = {
    email: "brunovilela2002@hotmail.com",
    status: true,
};
console.log(novoUsuario);
function novoUser({ nome, email, status }) {
    console.log(nome);
}
function novoUserAlt(props) {
    console.log(props.nome);
}
novoUser({ email: "TESTE", status: false });
