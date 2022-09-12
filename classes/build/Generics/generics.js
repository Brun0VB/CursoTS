"use strict";
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
function repositorioRigido() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
const repo2 = repositorio();
repo2.setDados(15);
repo1.setDados("15");
console.log(repo1.getDados());
console.log(repo2.getDados());
