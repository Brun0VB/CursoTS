"use strict";
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
let escolha = document.getElementById("prioridade");
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
        console.log(posicao);
        linkElemnt.setAttribute("onclick", `deletarTarefa(${posicao})`);
        linkElemnt.setAttribute("style", "margin-left: 10px");
        let linktext = document.createTextNode("Excluir");
        linkElemnt.appendChild(linktext);
        todoElement.appendChild(textoTarefa);
        todoElement.appendChild(linkElemnt);
        let subs = item.substring(item.length - 5, item.length);
        setPrioridade(subs, todoElement);
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
        let prioridade = escolha.value;
        tarefa = tarefa + "--" + prioridade;
        lista.push(tarefa);
        inputElement.value = "";
        escolha.value = '';
        listarTarefas();
        Salvar();
    }
}
inputElement.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        adicionaTarefa();
    }
});
escolha.addEventListener("keypress", function (e) {
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
function setPrioridade(text, elemento) {
    switch (text) {
        case "-alta":
            elemento.style.color = "red";
            break;
        case "média":
            elemento.style.color = "orange";
            break;
        case "baixa":
            elemento.style.color = "green";
            break;
        default:
            elemento.style.color = "black";
    }
}
