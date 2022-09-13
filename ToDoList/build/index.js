"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let listaSalva = localStorage.getItem("@listagemTarefas");
let lista = listaSalva !== null && JSON.parse(listaSalva) || [];
function listarTarefas() {
    listElement.innerHTML = "";
    lista.map(item => {
        let todoElement = document.createElement("li");
        let textoTarefa = document.createTextNode(item);
        let linkElemnt = document.createElement("a");
        linkElemnt.setAttribute("href", "#");
        let posicao = lista.indexOf(item);
        linkElemnt.setAttribute("onclick", `deletarTarefa(${posicao})`);
        linkElemnt.setAttribute("style", "margin-left: 10px");
        let linktext = document.createTextNode("Excluir");
        linkElemnt.appendChild(linktext);
        todoElement.appendChild(textoTarefa);
        todoElement.appendChild(linkElemnt);
        listElement.appendChild(todoElement);
    });
}
listarTarefas();
function adicionaTarefa() {
    if (inputElement.value === "") {
        alert("Digite alguma tarefa!");
        return false;
    }
    else {
        let tarefa = inputElement.value;
        lista.push(tarefa);
        inputElement.value = "";
        listarTarefas();
        Salvar();
    }
}
inputElement.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        adicionaTarefa();
    }
});
buttonElement.onclick = adicionaTarefa;
function Salvar() {
    localStorage.setItem("@listagemTarefas", JSON.stringify(lista));
}
function deletarTarefa(posicao) {
    lista.splice(posicao, 1);
    listarTarefas();
    Salvar();
}
