let listElement = document.querySelector("#app ul") as HTMLUListElement;
let inputElement = document.querySelector("#app input") as HTMLInputElement;
let buttonElement = document.querySelector("#app button") as HTMLElement;
let escolha = document.getElementById("prioridade") as HTMLInputElement;


// let listaPrioridadesSalva: string|null = localStorage.getItem("@listagemPrioridades")
// let listaPrioridades:string[] = listaPrioridadesSalva !== null && JSON.parse(listaPrioridadesSalva) ||[];

let listaSalva: string|null = localStorage.getItem("@listagemTarefas")
let lista:string[] = listaSalva !== null && JSON.parse(listaSalva) ||[];


function listarTarefas(){
    listElement.innerHTML = "";
    lista.map(item=>{
        let todoElement = document.createElement("li");
        let textoTarefa = document.createTextNode(item);

        let linkElemnt = document.createElement("a");
        linkElemnt.setAttribute("href","#");

        let posicao = lista.indexOf(item)
        console.log(posicao);

        linkElemnt.setAttribute("onclick",`deletarTarefa(${posicao})`);
        linkElemnt.setAttribute("style","margin-left: 10px");

        let linktext = document.createTextNode("Excluir");
        linkElemnt.appendChild(linktext)

        todoElement.appendChild(textoTarefa);
        todoElement.appendChild(linkElemnt);
        //setPrioridade(todoElement,posicao);
        let subs = item.substring(item.length-5,item.length)
        setPrioridade(subs,todoElement);
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
       let prioridade: string = escolha.value;
       //listaPrioridades.push(prioridade)
       tarefa= tarefa+"--"+prioridade;
       lista.push(tarefa);
       inputElement.value = "";//reseta o campo de digitaão
       escolha.value = '';
       listarTarefas();
       Salvar();//chama funcoa de salvamento
    }
}

inputElement.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        adicionaTarefa();
    }
})
escolha.addEventListener("keypress",function(e){
    if(e.key === 'Enter'){
        adicionaTarefa();
    }
})

buttonElement.onclick = adicionaTarefa//manipula o evento de click

function Salvar(){
    localStorage.setItem("@listagemTarefas",JSON.stringify(lista));//salva no armazenamento local a lista criada
    //localStorage.setItem("@listagemPrioridaes",JSON.stringify(listaPrioridades))
}

function deletarTarefa(posicao:number){
    lista.splice(posicao,1);
    //listaPrioridades.splice(posicao,1)
    listarTarefas();
    Salvar();
}


function setPrioridade(text:string,elemento: HTMLLIElement):void{
    switch (text){
        case "-alta":
            elemento.style.color="red";
            break;
        case "média":
            elemento.style.color="orange";
            break;
        case "baixa":
            elemento.style.color="green";
            break;
        default:
            elemento.style.color = "black"
   }
}
// function setPrioridade(elemento: HTMLLIElement,position:number){
//    switch (listaPrioridades[position]){
//         case "alta":
//             elemento.style.color="red";
//             break;
//         case "média":
//             elemento.style.color="orange";
//             break;
//         case "baixa":
//             elemento.style.color="green";
//             break;
//         default:
//             elemento.style.color = "black"
//    }
// }