let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;



let listaSalva: string|null = localStorage.getItem("@listagemTarefas")
let lista:string[] = listaSalva !== null && JSON.parse(listaSalva) ||[];



// buttonSoma.addEventListener('click',function(){
//     const resultado = Operar({
//         tipo: "Somar",
//         a: Number(input1.value),
//         b: Number(input2.value),
//     }) //passando os parametros fa funçao que exige um objeto
    
//     console.log(resultado);
// })
function listarTarefas(){
    listElement.innerHTML = "";
    lista.map(item=>{
        let todoElement = document.createElement("li");
        let textoTarefa = document.createTextNode(item);

        let linkElemnt = document.createElement("a");
        linkElemnt.setAttribute("href","#");

        let posicao = lista.indexOf(item)

        linkElemnt.setAttribute("onclick",`deletarTarefa(${posicao})`);
        linkElemnt.setAttribute("style","margin-left: 10px");

        let linktext = document.createTextNode("Excluir");
        linkElemnt.appendChild(linktext)

        todoElement.appendChild(textoTarefa);
        todoElement.appendChild(linkElemnt)
        listElement.appendChild(todoElement);
    })
}

listarTarefas();

function adicionaTarefa(){
    if(inputElement.value ===""){
        alert("Digite alguma tarefa!")//programa um alerta para digitação vazia
        return false;
    }else{
       let tarefa: string = inputElement.value; 
       lista.push(tarefa);
       inputElement.value = "";//reseta o campo de digitaão
       listarTarefas();
       Salvar();//chama funcoa de salvamento
    }
}

inputElement.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        adicionaTarefa();
    }
})

buttonElement.onclick = adicionaTarefa//manipula o evento de click

function Salvar(){
    localStorage.setItem("@listagemTarefas",JSON.stringify(lista));//salva no armazenamento local a lista criada

}

function deletarTarefa(posicao:number){
    lista.splice(posicao,1);
    listarTarefas();
    Salvar();
}